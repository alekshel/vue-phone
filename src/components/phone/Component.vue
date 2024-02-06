<script setup>
import "../../assets/css/flags.css";
import "../../assets/css/phone-component.css";

import countries from "./countries.js";
import {onMounted, ref, watch} from "vue";
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'

let isOpen = ref(false);
let phone = ref("");
let countriesList = ref(countries);
let search = ref("");
let timer = ref(null);
let selectedCountry = ref({});

let error = ref({
    "status": false,
    "message": ""
});

function setHovered(country, value) {
    country.isHovered = value;
}

function setDefaultCountry(value) {
    return selectedCountry.value = countries.find((c) => c.iso === value);
}

function setCountry(country) {
    selectedCountry.value = country;
    isOpen.value = false;
    search.value = "";
    countriesList.value = countries;
    validatePhone(phone.value);
}

function validatePhone(value) {
    clearTimeout(timer.value);
    phone.value = value.replace(/[^0-9+]/g, '');

    let code = selectedCountry.value['iso']
    let phoneParsed = parsePhoneNumber(phone.value, {
        defaultCountry: code
    })

    if (!phoneParsed) {
        return false;
    }

    if (phoneParsed.country !== code) {
        let country = countries.find((c) => c["iso"] === phoneParsed.country);
        setCountry(country);
    }

    let isValid = isValidPhoneNumber(phoneParsed.number, {
        defaultCountry: code
    })

    if (!isValid) {
        timer.value = setTimeout(() => {
            error.value = {
                "status": true,
                "message": "Неверный формат номера телефона"
            }
        }, 600);
        return false;
    }

    error.value = {
        "status": false,
        "message": ""
    }
}

watch(search, (value) => {
    clearTimeout(timer);

    if (value === "") {
        countriesList.value = countries;
        return;
    }

    timer = setTimeout(() => {
        countriesList.value = countries.filter((country) => {
            return country.en_name.toLowerCase().includes(value.toLowerCase()) ||
                country.origin_name.toLowerCase().includes(value.toLowerCase());
        });
    }, 300);
})

onMounted(async () => {
    await fetch('https://api.country.is/')
        .then(response => response.json())
        .then(data => {
            let country = (data["country"] ?? "kz");
            setDefaultCountry(country);
        })
});
</script>

<template>
    <div>
        <label for="phone">Номер телефона</label>
        <div class="phone-input">
            <input
                v-model="phone"
                @input="input => validatePhone(input.target.value)"
                type="tel"
                name="phone"
                id="phone"
                :placeholder="`Введите номер телефона ${ selectedCountry['country_code'] ?? '+7' } _________`"
                class="phone"
                autocomplete="off"
            />

            <div class="dropdown">
                <div
                    :class="`dropdown-trigger ${ isOpen ? 'open' : '' }`"
                    @click="isOpen = !isOpen"
                >
                    <span :class="`fflag fflag-${ selectedCountry['iso'] ?? 'KZ' }`"></span>
                    <span>▼</span>
                </div>

                <ul :class="`dropdown-list ${ isOpen ? '' : 'hidden' }`">
                    <li>
                        <input
                            type="text"
                            v-model="search"
                            placeholder="Afghanistan (‫افغانستان‬‎)"
                        >
                    </li>

                    <li
                        v-for="(country, index) in countriesList"
                        :key="index"
                        :class="{ 'highlighted': country['isHovered'] ?? false }"
                        @mouseover="setHovered(country, true)"
                        @mouseout="setHovered(country, false)"
                        @click="setCountry(country)"
                    >
                        <span :class="`fflag fflag-${ country.iso ?? 'KZ' }`"></span>
                        <strong>{{ country.en_name }} ({{ country.origin_name }})</strong>
                        <span>{{ country.country_code }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <p
            class="error-message"
            v-if="error && error.status"
        >{{ error.message }}</p>
    </div>
</template>

<style scoped>
</style>

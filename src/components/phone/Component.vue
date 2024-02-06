<script setup>
import "../../assets/css/flags.css";
import "../../assets/css/phone-component.css";

import countries from "./countries.js";
import {onMounted, ref, watch} from "vue";
import {parsePhoneNumberWithError, isValidPhoneNumber} from 'libphonenumber-js'

let isOpen = ref(false);
let phone = ref("");
let countriesList = ref(countries);
let search = ref("");
let timer;
let selectedCountry = ref(null);

let error = ref({
    "status": false,
    "message": ""
});

function setError(status, message) {
    error.value = {
        "status": status,
        "message": message
    }
}

function classWhenOpen(className, alternativeClassName = "") {
    return isOpen.value ? className : alternativeClassName;
}

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
    parseCountry(phone.value);
}

function parseCountry(value) {
    phone.value = value.replace(/[^0-9+]/g, '');
    if (phone.value === "" || phone.value.length < 2) {
        return;
    }

    let code = selectedCountry.value['iso'];
    let phoneParsed

    try {
        phoneParsed = parsePhoneNumberWithError(phone.value, {
            defaultCountry: code
        })
    } catch (e) {
        let message = "Неверный формат номера телефона"
        if (e.message === "TOO_SHORT") {
            message = "Слишком короткий номер телефона"
        }

        setError(true, message);
        return;
    }

    switchCountry(phoneParsed.country, code);
    validateCountry(phoneParsed.number, code);
}

function switchCountry(parsedCountry, SelectedCountry) {
    if (parsedCountry === SelectedCountry) {
        return;
    }

    let country = countries.find((c) => c["iso"] === parsedCountry);
    setCountry(country);
}

function validateCountry(number, code) {
    clearTimeout(timer);

    let isValid = isValidPhoneNumber(number, {
        defaultCountry: code
    })

    if (!isValid) {
        timer = setTimeout(() => {
            setError(true, "Неверный формат номера телефона");
        }, 600);
        return false;
    }

    setError(false, "");
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
    try {
        await fetch('https://api.country.is/')
            .then(response => response.json())
            .then(data => {
                setDefaultCountry(data["country"]);
            })
    } catch (e) {
        setDefaultCountry("KZ")
        console.log(e)
    }
});
</script>

<template>
    <div v-if="selectedCountry && selectedCountry['iso']">
        <label for="phone">Номер телефона</label>
        <div class="phone-input mt-3">
            <input
                v-model="phone"
                @input="input => parseCountry(input.target.value)"
                type="tel"
                name="phone"
                id="phone"
                :placeholder="`Введите номер телефона ${ selectedCountry['country_code'] } _________`"
                autocomplete="off"
            />

            <div class="dropdown">
                <div
                    :class="`dropdown-trigger ${ classWhenOpen('open') }`"
                    @click="isOpen = !isOpen"
                >
                    <span :class="`fflag fflag-${ selectedCountry['iso'] }`"></span>
                    <span>▼</span>
                </div>

                <ul :class="`dropdown-list ${ classWhenOpen('', 'hidden') }`">
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
                        <span :class="`fflag fflag-${ country.iso }`"></span>
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

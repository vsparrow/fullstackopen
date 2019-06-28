[1mdiff --git a/part2/dataforcountries/src/components/Countries.js b/part2/dataforcountries/src/components/Countries.js[m
[1mindex a9ae65c..7dad074 100644[m
[1m--- a/part2/dataforcountries/src/components/Countries.js[m
[1m+++ b/part2/dataforcountries/src/components/Countries.js[m
[36m@@ -1,5 +1,6 @@[m
 import React, {useState, useEffect} from "react";[m
 import Country from "./Country"[m
[32m+[m[32mimport Weather from "./Weather"[m
 [m
 //country is bool if false, country object otherwise[m
 //countries in an array[m
[36m@@ -10,6 +11,7 @@[m [mconst Countries = ({countries, country, setCountry, setCountries, previewcountry[m
     console.log("country is",country)[m
     let display = <div></div>[m
     let showCountry = country ? <Country country={country}/> : <div></div>[m
[32m+[m[32m    let showWeather = country ? <Weather country={country}/> : <div></div>[m
     let showPreviewCountry = previewcountry ? <Country country={previewcountry}/> : <div></div>[m
     const countryLanguages = (languages)=>[m
         languages.map(language => <li key={language.name}>{language.name}</li>)[m
[36m@@ -38,6 +40,7 @@[m [mconst Countries = ({countries, country, setCountry, setCountries, previewcountry[m
         <div>[m
             {display}[m
             {showCountry}[m
[32m+[m[32m            {showWeather}[m
             {showPreviewCountry}[m
         </div>[m
     )[m
[1mdiff --git a/part2/dataforcountries/src/components/Country.js b/part2/dataforcountries/src/components/Country.js[m
[1mindex 0ed611b..181faaf 100644[m
[1m--- a/part2/dataforcountries/src/components/Country.js[m
[1m+++ b/part2/dataforcountries/src/components/Country.js[m
[36m@@ -1,6 +1,5 @@[m
 import React, {useState, useEffect} from "react";[m
 [m
[31m-[m
 const Country = ({country}) => {[m
 [m
     const countryLanguages = (languages)=>[m
[36m@@ -18,7 +17,7 @@[m [mconst Country = ({country}) => {[m
             <div>population {population}</div>[m
             <h2>languages</h2>[m
             <ul>{countryLanguages(languages)}</ul>[m
[31m-            {flag}          [m
[32m+[m[32m            {flag}[m[41m        [m
         </div>    [m
         [m
     )[m

import defaultPhoto from "../../images/profile_image.png";
import earthPhoto from "../../images/earth-map.png";

export const addCountry = {     
  pageTopTitle: "Add new country",
  btnText: "Add country",
  defaultPhoto: earthPhoto,
  imageWidth: 350,
  imageHeight: 200,
  imageRadius: 4,
  inputs: [
    { id: "input_12asd", type: "text", special: "countryName", placeholder: "Enter country name", name: "name", label: "Country name", autoFocus: true },
    { id: "input_12sjd", type: "text", placeholder: "Enter capital name", name: "capital", label: "Capital name" },
    { id: "input_1983j", type: "text", placeholder: "Enter region name", name: "region", label: "Region name" },
    { id: "input_1sdjf", type: "number", placeholder: "Enter country population", name: "population", label: "Population" },
  ],
  initialData: {
    name: {common: ""},
    flags: {png: ""},
    region: "",
    capital: "",
    population: "",
  },
};

export const editCountry = {     
  pageTopTitle: "Edit country",
  btnText: "Update country",
  defaultPhoto: earthPhoto,
  imageWidth: 330,
  imageHeight: 200,
  imageRadius: 4,
  inputs: [
    { id: "input_12asd", type: "text", special: "countryName", placeholder: "Enter country name", name: "name", label: "Country name", autoFocus: true },
    { id: "input_12sjd", type: "text", placeholder: "Enter capital name", name: "capital", label: "Capital name" },
    { id: "input_1983j", type: "text", placeholder: "Enter region name", name: "region", label: "Region name" },
    { id: "input_1sdjf", type: "number", placeholder: "Enter country population", name: "population", label: "Population" },
  ],
  initialData: {
    name: {common: ""},
    flags: {png: ""},
    region: "",
    capital: "",
    population: "",
  },
};

export const addUser = {
  pageTopTitle: "Add new user",
  defaultPhoto, 
  btnText: "Add user",
  imageWidth: 150,
  imageHeight: 150,
  imageRadius: "50%",
  inputs: [
    { id: "input_1212", type: "text", placeholder: "Enter username", name: "displayName", label: "Username", autoFocus: true },
    { id: "input_1we23", type: "email", placeholder: "Enter email address", name: "email", label: "Email address" },
    { id: "input_12asd2", type: "password", placeholder: "Enter password", name: "password", label: "Password" }
  ],
  initialData: {
    displayName: "",
    email: "",
    password: "",
    photoURL: "",
  },
  permissions: [
    {title: "You want your user to be able to add a new country?", name: "addCountry"},
    {title: "You want your user to be able to add a new country?", name: "editCountry"},
    {title: "You want your user to be able to add a new country?", name: "deleteCountry"},
    {title: "You want your user to be able to add a new country?", name: "selectCountry"},
  ]
};

export const editUser = {
  pageTopTitle: "Edit user",
  defaultPhoto, 
  btnText: "Update user",
  imageWidth: 150,
  imageHeight: 150,
  imageRadius: "50%",
  inputs: [
    { id: "input_1212", type: "text", placeholder: "Enter username", name: "displayName", label: "Username", autoFocus: true },
    { id: "input_1we23", type: "email", placeholder: "Enter email address", name: "email", label: "Email address" },
    { id: "input_12asd2", type: "password", placeholder: "Enter password", name: "password", label: "Password" }
  ],
  initialData: {
    displayName: "",
    email: "",
    password: "",
    photoURL: "",
  },
};
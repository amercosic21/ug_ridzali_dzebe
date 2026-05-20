// Centralna lokacija za sve kontakt i osnovne informacije o udruženju.
// Promjenom ovdje, vrijednosti se ažuriraju svuda na stranici.

export const siteInfo = {
  name: 'Udruženje građana "Ridžali-Džebe"',
  shortName: 'UG "Ridžali-Džebe"',
  url: "https://ridzalidzebe.ba",
  foundingYear: "2024",

  email: "ugridzalidzebe@hotmail.com",

  phone: {
    display: "+387 61 469 140",
    href: "+38761469140",
  },

  address: {
    street: 'ulica "14. Aprila" bb',
    city: "Zavidovići",
    country: "Bosna i Hercegovina",
    countryCode: "BA",
    area: "Ridžali / Džebe, Zavidovići",
  },

  social: {
    facebook: {
      url: "https://www.facebook.com/profile.php?id=100083602091090",
      label: 'Udruženje građana "Ridžali-Džebe"',
    },
    instagram: {
      url: "https://www.instagram.com/ug_ridzalidzebe",
      handle: "ug_ridzalidzebe",
    },
  },
} as const;

export const mailtoHref = `mailto:${siteInfo.email}`;
export const telHref = `tel:${siteInfo.phone.href}`;

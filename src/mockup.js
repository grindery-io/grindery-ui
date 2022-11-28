import { ICONS } from "./constants.js";

export const richInputOptions = [
  {
    value: "{{trigger.address}}",
    label: "Wallet address",
    paid: true,
    icon: ICONS.GOOGLE_SHEETS,
    group: "Google Sheets",
  },
  {
    value: "{{trigger.txdate}}",
    label: "Transaction date",
    icon: ICONS.MOLOCH_DAO,
    group: "MolochDao",
    reference: "05/21/2022",
  },
  {
    value: "{{trigger.title}}",
    label: "Title",
    icon: ICONS.GOOGLE_SHEETS,
    group: "Google Sheets",
    reference: "New title",
  },
  {
    value: "{{trigger.txhash}}",
    label: "Transaction hash",
    icon: ICONS.MOLOCH_DAO,
    group: "MolochDao",
    reference: "0x912819482039850298545094530495094",
  },
  {
    value: "{{trigger.details}}",
    label: "Details",
    icon: ICONS.GOOGLE_SHEETS,
    group: "Google Sheets",
    reference: "Some long description text",
  },
];

export const autocompleteOptions = [
  {
    value: "1",
    label: "Google Sheets Brief description of this Moloch DAO function here",
    description:
      "Brief description of this Moloch DAO function here Brief description of this Moloch DAO function here ",
    paid: true,
    icon: ICONS.GOOGLE_SHEETS,
    reference: "0x912819482039850298545094530495094",
  },
  {
    value: "2",
    label: "MolochDao",
    icon: ICONS.MOLOCH_DAO,
  },
  { value: "3", label: "Google", icon: ICONS.GOOGLE_SHEETS },
  {
    value: "4",
    label: "Gmail",
    icon: ICONS.GOOGLE_SHEETS,
    group: "Coming soon",
    disabled: true,
  },
  {
    value: "5",
    label: "Google Meet",
    icon: ICONS.GOOGLE_SHEETS,
    group: "Coming soon",
    disabled: true,
  },
];

export const apps = [
  {
    url: "https://flow.grindery.org/",
    name: "Flow",
    description: "Create workflows witn no-code",
    target: "_blank",
  },
  {
    url: "https://ping.grindery.org/",
    name: "Ping",
    description: "Receive blockchain notifications",
    target: "_blank",
  },
  {
    url: "https://api.grindery.org/",
    name: "API",
    description: "Your gateway to web3 no-code",
    target: "_blank",
  },
  {
    url: "https://cds.grindery.org/",
    name: "CDS",
    description: "Create Connector Description Schema files",
    target: "_blank",
  },
];

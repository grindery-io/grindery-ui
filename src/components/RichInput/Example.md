Example:

```js
import RichInput from './RichInput';
import {ICONS} from '../../constants.js';

const [richInputValue, setRichInputValue] = React.useState("");

const richInputOptions = [
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

  const cachedAddressBook = localStorage.getItem("gr_addressBook__123");
  const [addressBook, setAddressBook] = React.useState(
    cachedAddressBook ? JSON.parse(cachedAddressBook) : []
  );

  <RichInput
    required
    label="Some Label"
    value={richInputValue}
    options={richInputOptions}
    placeholder="Enter some value here"
    tooltip="Some tooltip with long text. Bla bla bla."
    hasAddressBook
    user="123:123"
    onChange={(val) => {
    setRichInputValue(val);
    }}
    addressBook={addressBook}
    setAddressBook={setAddressBook}
/>
```
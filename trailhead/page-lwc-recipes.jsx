// PageLwcRecipes - Interactive Salesforce LWC Recipes Sandbox & Code Library
const { useState, useEffect, useRef } = React;

// Static Code Data for all 6 recipes
const RECIPE_CODES = {
  charRestrict: {
    html: `<template>
    <lightning-card title="Character Restriction Input" icon-name="custom:custom14">
        <div class="slds-var-m-around_medium">
            <lightning-input 
                type="text" 
                label={label} 
                placeholder={placeholder}
                value={value}
                onkeypress={handleKeyPress}
                oninput={handleInput}>
            </lightning-input>
            <p class="slds-var-m-top_x-small slds-text-color_weak">
                Allowed Profile: {allowedType}
            </p>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, api, track } from 'lwc';

export default class CharRestrictInput extends LightningElement {
    @api label = 'Allowed Character Input';
    @api placeholder = 'Try typing...';
    @api allowedType = 'digits'; // 'digits' | 'alphabetic' | 'alphanumeric' | 'custom'
    @api customRegex = ''; // E.g., '^[a-zA-Z\\\\s]*$'

    @track value = '';

    get regexPattern() {
        if (this.allowedType === 'digits') return /[0-9]/;
        if (this.allowedType === 'alphabetic') return /[a-zA-Z]/;
        if (this.allowedType === 'alphanumeric') return /[a-zA-Z0-9]/;
        if (this.allowedType === 'custom' && this.customRegex) {
            return new RegExp(this.customRegex);
        }
        return null;
    }

    handleKeyPress(event) {
        const pattern = this.regexPattern;
        if (!pattern) return;

        const char = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        // Intercept keypress and block if not matching
        if (!pattern.test(char)) {
            event.preventDefault();
        }
    }

    handleInput(event) {
        const pattern = this.regexPattern;
        if (!pattern) {
            this.value = event.target.value;
            return;
        }

        // Fallback for copy-paste sanitize
        const rawValue = event.target.value;
        let sanitizedValue = '';
        for (let i = 0; i < rawValue.length; i++) {
            if (pattern.test(rawValue[i])) {
                sanitizedValue += rawValue[i];
            }
        }
        this.value = sanitizedValue;
        event.target.value = sanitizedValue; // Force sync back to input element
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Character Restrict Input</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage,lightning__AppPage,lightning__HomePage">
            <property name="label" type="String" default="Allowed Character Input"/>
            <property name="placeholder" type="String" default="Try typing..."/>
            <property name="allowedType" type="String" datasource="digits,alphabetic,alphanumeric,custom" default="digits"/>
            <property name="customRegex" type="String" description="Custom Regex pattern. E.g. ^[a-zA-Z\\s]*$"/>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>`
  },
  intlPhone: {
    html: `<template>
    <lightning-card title="International Phone Input" icon-name="standard:contact">
        <div class="slds-var-m-around_medium">
            <div class="slds-grid slds-gutters">
                <div class="slds-col slds-size_4-of-12">
                    <lightning-combobox
                        name="countryCode"
                        label="Country Code"
                        value={selectedCountry}
                        options={countryOptions}
                        onchange={handleCountryChange}>
                    </lightning-combobox>
                </div>
                <div class="slds-col slds-size_8-of-12">
                    <lightning-input
                        type="tel"
                        name="phone"
                        label={phoneLabel}
                        placeholder={placeholder}
                        value={phoneNumber}
                        pattern={pattern}
                        message-when-pattern-mismatch={errorMessage}
                        oninput={handlePhoneInput}
                        required>
                    </lightning-input>
                </div>
            </div>
            <p class="slds-var-m-top_small">
                Combined Phone Number: <strong>{fullPhoneNumber}</strong>
            </p>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class IntPhoneInput extends LightningElement {
    @track selectedCountry = '+1';
    @track phoneNumber = '';

    countryConfigs = {
        '+1': { placeholder: '(555) 555-5555', format: 'us', label: 'US Phone Number', pattern: '^\\\\(\\\\d{3}\\\\)\\\\s\\\\d{3}-\\\\d{4}$', error: 'Format: (555) 555-5555' },
        '+91': { placeholder: '98765-43210', format: 'in', label: 'IN Phone Number', pattern: '^\\\\d{5}-\\\\d{5}$', error: 'Format: 98765-43210' },
        '+44': { placeholder: '7911 123456', format: 'uk', label: 'UK Mobile Number', pattern: '^\\\\d{4}\\\\s\\\\d{6}$', error: 'Format: 7911 123456' },
        '+61': { placeholder: '412 345 678', format: 'au', label: 'AU Mobile Number', pattern: '^\\\\d{3}\\\\s\\\\d{3}\\\\s\\\\d{3}$', error: 'Format: 412 345 678' }
    };

    get countryOptions() {
        return [
            { label: '🇺🇸 United States (+1)', value: '+1' },
            { label: '🇮🇳 India (+91)', value: '+91' },
            { label: '🇬🇧 United Kingdom (+44)', value: '+44' },
            { label: '🇦🇺 Australia (+61)', value: '+61' }
        ];
    }

    get activeConfig() {
        return this.countryConfigs[this.selectedCountry];
    }

    get phoneLabel() { return this.activeConfig.label; }
    get placeholder() { return this.activeConfig.placeholder; }
    get pattern() { return this.activeConfig.pattern; }
    get errorMessage() { return this.activeConfig.error; }

    get fullPhoneNumber() {
        if (!this.phoneNumber) return '';
        return \`\${this.selectedCountry} \${this.phoneNumber}\`;
    }

    handleCountryChange(event) {
        this.selectedCountry = event.detail.value;
        this.phoneNumber = ''; // Reset on country switch
    }

    handlePhoneInput(event) {
        let value = event.target.value.replace(/\\D/g, ''); // strip non-digits
        const format = this.activeConfig.format;

        // Apply masking formatting on inputs dynamically
        if (format === 'us') {
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length > 6) {
                value = \`(\${value.slice(0,3)}) \${value.slice(3,6)}-\${value.slice(6)}\`;
            } else if (value.length > 3) {
                value = \`(\${value.slice(0,3)}) \${value.slice(3)}\`;
            } else if (value.length > 0) {
                value = \`(\${value}\`;
            }
        } else if (format === 'in') {
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length > 5) {
                value = \`\${value.slice(0,5)}-\${value.slice(5)}\`;
            }
        } else if (format === 'uk') {
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length > 4) {
                value = \`\${value.slice(0,4)} \${value.slice(4)}\`;
            }
        } else if (format === 'au') {
            if (value.length > 9) value = value.slice(0, 9);
            if (value.length > 6) {
                value = \`\${value.slice(0,3)} \${value.slice(3,6)} \${value.slice(6)}\`;
            } else if (value.length > 3) {
                value = \`\${value.slice(0,3)} \${value.slice(3)}\`;
            }
        }
        this.phoneNumber = value;
        event.target.value = value;
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>International Phone Input</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__FlowScreen</target>
    </targets>
</LightningComponentBundle>`
  },
  combobox: {
    html: `<template>
    <div class="slds-form-element">
        <label class="slds-form-element__label">{label}</label>
        <div class="slds-form-element__control">
            <div class="slds-combobox_container">
                <div class={comboboxClass} aria-expanded={isDropdownOpen} role="combobox">
                    
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right">
                        <input
                            type="text"
                            class="slds-input slds-combobox__input"
                            placeholder={placeholder}
                            value={searchTerm}
                            disabled={hasSelection}
                            oninput={handleSearchInput}
                            onfocus={handleFocus}
                            onblur={handleBlur}
                        />
                        
                        <span class="slds-icon_container slds-input__icon slds-input__icon_right">
                            <template if:true={hasSelection}>
                                <button class="slds-button slds-button_icon" onclick={handleClearSelection}>
                                    ✕
                                </button>
                            </template>
                            <template if:false={hasSelection}>
                                🔍
                            </template>
                        </span>
                    </div>

                    <!-- Dropdown Panel -->
                    <template if:true={isDropdownOpen}>
                        <div class="slds-dropdown slds-dropdown_fluid" role="listbox">
                            <ul class="slds-listbox slds-listbox_vertical">
                                <template for:each={filteredOptions} var="opt">
                                    <li key={opt.value} class="slds-listbox__item" onmousedown={handleOptionSelect} data-value={opt.value} data-label={opt.label}>
                                        <div class="slds-media slds-listbox__option slds-media_center">
                                            <span class="slds-media__body">
                                                <span class="slds-listbox__option-text">{opt.label}</span>
                                            </span>
                                        </div>
                                    </li>
                                </template>
                                <template if:false={filteredOptions.length}>
                                    <li class="slds-align_absolute-center slds-p-around_small slds-text-color_weak">
                                        No matches found.
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>`,
    js: `import { LightningElement, api, track } from 'lwc';

export default class SearchableCombobox extends LightningElement {
    @api label = 'Search Accounts';
    @api placeholder = 'Search here...';
    @api options = [
        { label: 'Acme Corp', value: 'acme' },
        { label: 'Salesforce Inc', value: 'salesforce' },
        { label: 'Google LLC', value: 'google' },
        { label: 'Apple Inc', value: 'apple' },
        { label: 'Amazon.com', value: 'amazon' }
    ];

    @track searchTerm = '';
    @track selectedValue = '';
    @track isDropdownOpen = false;

    get hasSelection() {
        return !!this.selectedValue;
    }

    get comboboxClass() {
        return \`slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click \${this.isDropdownOpen ? 'slds-is-open' : ''}\`;
    }

    get filteredOptions() {
        if (!this.searchTerm) return this.options;
        const searchKey = this.searchTerm.toLowerCase();
        return this.options.filter(opt => opt.label.toLowerCase().includes(searchKey));
    }

    handleSearchInput(event) {
        this.searchTerm = event.target.value;
    }

    handleFocus() {
        if (!this.hasSelection) {
            this.isDropdownOpen = true;
        }
    }

    handleBlur() {
        // Delay close slightly so mousedown selection has time to execute
        setTimeout(() => {
            this.isDropdownOpen = false;
        }, 200);
    }

    handleOptionSelect(event) {
        const targetValue = event.currentTarget.dataset.value;
        const targetLabel = event.currentTarget.dataset.label;
        this.selectedValue = targetValue;
        this.searchTerm = targetLabel;
        this.isDropdownOpen = false;

        this.dispatchEvent(new CustomEvent('select', { 
            detail: { value: targetValue, label: targetLabel } 
        }));
    }

    handleClearSelection(event) {
        event.stopPropagation();
        this.selectedValue = '';
        this.searchTerm = '';
        this.isDropdownOpen = false;
        
        this.dispatchEvent(new CustomEvent('select', { 
            detail: { value: '', label: '' } 
        }));
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Searchable Combobox</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
    </targets>
</LightningComponentBundle>`
  },
  addressCascade: {
    html: `<template>
    <lightning-card title="Address Form" icon-name="standard:address">
        <div class="slds-var-p-around_medium">
            <div class="slds-grid slds-wrap slds-gutters">
                <div class="slds-col slds-size_1-of-1 slds-var-m-bottom_small">
                    <lightning-combobox
                        name="country"
                        label="Country"
                        value={address.country}
                        options={countryOptions}
                        onchange={handleCountryChange}
                        required>
                    </lightning-combobox>
                </div>
                <div class="slds-col slds-size_1-of-1 slds-var-m-bottom_small">
                    <lightning-input
                        name="street1"
                        label="Street Address Line 1"
                        value={address.street1}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_1-of-1 slds-var-m-bottom_small">
                    <lightning-input
                        name="street2"
                        label="Street Address Line 2"
                        value={address.street2}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_6-of-12 slds-var-m-bottom_small">
                    <lightning-input
                        name="city"
                        label="City"
                        value={address.city}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_3-of-12 slds-var-m-bottom_small">
                    <lightning-input
                        name="state"
                        label="State"
                        value={address.state}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_3-of-12 slds-var-m-bottom_small">
                    <lightning-input
                        name="zip"
                        label="ZIP Code"
                        value={address.zip}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
            </div>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class CascadingAddress extends LightningElement {
    @track address = {
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    };

    get countryOptions() {
        return [
            { label: 'United States', value: 'US' },
            { label: 'India', value: 'IN' },
            { label: 'Canada', value: 'CA' },
            { label: 'United Kingdom', value: 'UK' }
        ];
    }

    get isFormDisabled() {
        return !this.address.country;
    }

    handleCountryChange(event) {
        const nextCountry = event.detail.value;
        const prevCountry = this.address.country;

        // Reset address parameters if country updates
        if (nextCountry !== prevCountry) {
            this.address = {
                street1: '',
                street2: '',
                city: '',
                state: '',
                zip: '',
                country: nextCountry
            };
        }
    }

    handleInputChange(event) {
        const fieldName = event.target.name;
        this.address[fieldName] = event.target.value;
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Cascading Address Form</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>`
  },
  patternInput: {
    html: `<template>
    <lightning-card title="Dynamic Validation Field" icon-name="standard:reward">
        <div class="slds-var-m-around_medium">
            <lightning-combobox
                label="Verification Document"
                value={selectedDocType}
                options={docOptions}
                onchange={handleDocTypeChange}
                class="slds-var-m-bottom_medium">
            </lightning-combobox>

            <lightning-input
                name="documentInput"
                label={activeConfig.label}
                placeholder={activeConfig.placeholder}
                value={inputValue}
                pattern={activeConfig.pattern}
                message-when-pattern-mismatch={activeConfig.errorMessage}
                oninput={handleInput}
                field-level-help={activeConfig.guidance}
                required>
            </lightning-input>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class DynamicPatternInput extends LightningElement {
    @track selectedDocType = 'aadhar';
    @track inputValue = '';

    docConfigs = {
        aadhar: {
            label: 'Aadhar Card Number',
            placeholder: '1234-5678-9012',
            pattern: '^\\\\d{4}-\\\\d{4}-\\\\d{4}$',
            guidance: '12 digits divided by hyphens (-) after every 4 digits.',
            errorMessage: 'Format must be: XXXX-XXXX-XXXX (12 digits total)',
            format: 'aadhar'
        },
        passport: {
            label: 'Passport Code',
            placeholder: 'A1234567',
            pattern: '^[A-Z][0-9]{7}$',
            guidance: '1 capital letter followed by exactly 7 digits.',
            errorMessage: 'Format must start with 1 letter and follow with 7 numbers',
            format: 'passport'
        },
        ssn: {
            label: 'US SSN',
            placeholder: 'XXX-XX-XXXX',
            pattern: '^\\\\d{3}-\\\\d{2}-\\\\d{4}$',
            guidance: '9 digits divided as XXX-XX-XXXX with hyphens.',
            errorMessage: 'SSN format must be: XXX-XX-XXXX',
            format: 'ssn'
        }
    };

    get docOptions() {
        return [
            { label: 'Aadhar Card (India)', value: 'aadhar' },
            { label: 'Passport (Global)', value: 'passport' },
            { label: 'SSN (United States)', value: 'ssn' }
        ];
    }

    get activeConfig() {
        return this.docConfigs[this.selectedDocType];
    }

    handleDocTypeChange(event) {
        this.selectedDocType = event.detail.value;
        this.inputValue = ''; // Clear input on switch
    }

    handleInput(event) {
        let value = event.target.value;
        const format = this.activeConfig.format;

        // Perform formatting on the fly
        if (format === 'aadhar') {
            value = value.replace(/\\D/g, '');
            if (value.length > 12) value = value.slice(0, 12);
            if (value.length > 8) {
                value = \`\${value.slice(0, 4)}-\${value.slice(4, 8)}-\\d\${value.slice(8)}\`;
            } else if (value.length > 4) {
                value = \`\${value.slice(0, 4)}-\${value.slice(4)}\`;
            }
        } else if (format === 'ssn') {
            value = value.replace(/\\D/g, '');
            if (value.length > 9) value = value.slice(0, 9);
            if (value.length > 5) {
                value = \`\${value.slice(0, 3)}-\${value.slice(3, 5)}-\${value.slice(5)}\`;
            } else if (value.length > 3) {
                value = \`\${value.slice(0, 3)}-\\d\${value.slice(3)}\`;
            }
        } else if (format === 'passport') {
            let clean = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
            if (clean.length > 8) clean = clean.slice(0, 8);
            let formatted = '';
            if (clean.length > 0) {
                const first = clean[0];
                if (/[A-Z]/.test(first)) {
                    formatted = first + clean.slice(1).replace(/\\D/g, '');
                }
            }
            value = formatted;
        }

        this.inputValue = value;
        event.target.value = value;
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Dynamic Pattern Input</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>`
  },
  sameAsCheckbox: {
    html: `<template>
    <lightning-card title="Fields Sync Control" icon-name="standard:checkbox">
        <div class="slds-var-m-around_medium">
            <lightning-input
                name="primary"
                label="Primary Nationality"
                value={primaryValue}
                oninput={handlePrimaryChange}>
            </lightning-input>

            <lightning-input
                type="checkbox"
                label="Secondary Nationality is Same as Primary"
                checked={isSame}
                onchange={handleCheckboxChange}
                disabled={isCheckboxDisabled}
                class="slds-var-m-vertical_small">
            </lightning-input>

            <lightning-input
                name="secondary"
                label="Secondary Nationality"
                value={secondaryValue}
                oninput={handleSecondaryChange}>
            </lightning-input>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class AddressCopySync extends LightningElement {
    @track primaryValue = '';
    @track secondaryValue = '';
    @track isSame = false;

    get isCheckboxDisabled() {
        return !this.primaryValue;
    }

    handlePrimaryChange(event) {
        this.primaryValue = event.target.value;
        
        // Sync values if checkbox is active
        if (this.isSame) {
            this.secondaryValue = this.primaryValue;
            if (!this.primaryValue) {
                this.isSame = false;
            }
        }
    }

    handleCheckboxChange(event) {
        this.isSame = event.target.checked;
        if (this.isSame) {
            this.secondaryValue = this.primaryValue;
        }
    }

    handleSecondaryChange(event) {
        this.secondaryValue = event.target.value;
        
        // Break sync if target field is edited manually
        if (this.isSame && this.secondaryValue !== this.primaryValue) {
            this.isSame = false;
        }
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Fields Sync Control</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>`
  }
};

function PageLwcRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("charRestrict");
  const [activeTab, setActiveTab] = useState("html"); // "html", "js", "xml"
  const [copied, setCopied] = useState(false);

  // States for Sandbox 1: Character restriction
  const [restrictProfile, setRestrictProfile] = useState("digits");
  const [customRegex, setCustomRegex] = useState("^[a-zA-Z\\s]*$");
  const [sandbox1Val, setSandbox1Val] = useState("");
  const [sandbox1Logs, setSandbox1Logs] = useState([]);

  // States for Sandbox 2: International Phone Code
  const [selectedCountry, setSelectedCountry] = useState("+1");
  const [phoneVal, setPhoneVal] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // States for Sandbox 3: Searchable Combobox
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedObject, setSelectedObject] = useState("");
  const comboboxOptions = [
    { label: "Account", value: "Account", desc: "Standard customer or business record" },
    { label: "Contact", value: "Contact", desc: "Person associated with an account" },
    { label: "Opportunity", value: "Opportunity", desc: "Sales deal or tracking item" },
    { label: "Lead", value: "Lead", desc: "Prospect before qualification" },
    { label: "Case", value: "Case", desc: "Customer support ticket" },
    { label: "Campaign", value: "Campaign", desc: "Marketing initiative" },
    { label: "User", value: "User", desc: "System user profile" },
    { label: "Asset", value: "Asset", desc: "Purchased items track" }
  ];

  // States for Sandbox 4: Address fields with Reset
  const [address, setAddress] = useState({
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });
  const [addressLogs, setAddressLogs] = useState([]);

  // States for Sandbox 5: Dynamic Document Number input
  const [docType, setDocType] = useState("aadhar");
  const [docVal, setDocVal] = useState("");
  const [docError, setDocError] = useState("");

  // States for Sandbox 6: Same As checkbox
  const [primaryNat, setPrimaryNat] = useState("");
  const [secondaryNat, setSecondaryNat] = useState("");
  const [isSameNat, setIsSameNat] = useState(false);
  const [syncLogs, setSyncLogs] = useState([]);

  // Clear sandbox fields on recipe switch
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);

  // Code Copy Action
  const copyCode = () => {
    const codeText = RECIPE_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // --- HANDLERS FOR SANDBOXES ---

  // Sandbox 1: Character Restriction Logic
  const getRegex = () => {
    if (restrictProfile === "digits") return /[0-9]/;
    if (restrictProfile === "alphabetic") return /[a-zA-Z]/;
    if (restrictProfile === "alphanumeric") return /[a-zA-Z0-9]/;
    if (restrictProfile === "custom") {
      try { return new RegExp(customRegex); } catch (e) { return null; }
    }
    return null;
  };

  const handleSandbox1KeyPress = (e) => {
    const rx = getRegex();
    if (!rx) return;
    const char = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!rx.test(char)) {
      e.preventDefault();
      addLog(`🚫 Blocked keypress: "${char}" (Fails to match pattern)`);
    } else {
      addLog(`✅ Allowed keypress: "${char}"`);
    }
  };

  const handleSandbox1Input = (e) => {
    const rx = getRegex();
    if (!rx) {
      setSandbox1Val(e.target.value);
      return;
    }
    // Filter out bad chars (like paste etc)
    const rawVal = e.target.value;
    let clean = "";
    let blockedCount = 0;
    for (let char of rawVal) {
      if (rx.test(char)) {
        clean += char;
      } else {
        blockedCount++;
      }
    }
    if (blockedCount > 0) {
      addLog(`✂️ Sanitized input: Filtered out ${blockedCount} invalid characters.`);
    }
    setSandbox1Val(clean);
  };

  const addLog = (msg) => {
    setSandbox1Logs(prev => [msg, ...prev.slice(0, 7)]);
  };

  // Sandbox 2: Phone Input Format
  const countryConfigs = {
    "+1": { placeholder: "(555) 555-5555", format: "us", label: "US Phone Number", pattern: /^\(\d{3}\)\s\d{3}-\d{4}$/, error: "Format must be (555) 555-5555" },
    "+91": { placeholder: "98765-43210", format: "in", label: "IN Phone Number", pattern: /^\d{5}-\d{5}$/, error: "Format must be 5 digits, hyphen, 5 digits (98765-43210)" },
    "+44": { placeholder: "7911 123456", format: "uk", label: "UK Mobile Number", pattern: /^\d{4}\s\d{6}$/, error: "Format must be 4 digits, space, 6 digits (7911 123456)" },
    "+61": { placeholder: "412 345 678", format: "au", label: "AU Mobile Number", pattern: /^\d{3}\s\d{3}\s\d{3}$/, error: "Format must be 3 digits, space, 3 digits, space, 3 digits (412 345 678)" }
  };

  const activePhoneConfig = countryConfigs[selectedCountry];

  const handleCountryChange = (val) => {
    setSelectedCountry(val);
    setPhoneVal("");
    setPhoneError("");
  };

  const handlePhoneValChange = (e) => {
    let raw = e.target.value.replace(/\D/g, "");
    const format = activePhoneConfig.format;
    let formatted = raw;

    if (format === "us") {
      if (raw.length > 10) raw = raw.slice(0, 10);
      if (raw.length > 6) {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`;
      } else if (raw.length > 3) {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
      } else if (raw.length > 0) {
        formatted = `(${raw}`;
      }
    } else if (format === "in") {
      if (raw.length > 10) raw = raw.slice(0, 10);
      if (raw.length > 5) {
        formatted = `${raw.slice(0, 5)}-${raw.slice(5)}`;
      }
    } else if (format === "uk") {
      if (raw.length > 10) raw = raw.slice(0, 10);
      if (raw.length > 4) {
        formatted = `${raw.slice(0, 4)} ${raw.slice(4)}`;
      }
    } else if (format === "au") {
      if (raw.length > 9) raw = raw.slice(0, 9);
      if (raw.length > 6) {
        formatted = `${raw.slice(0, 3)} ${raw.slice(3, 6)} ${raw.slice(6)}`;
      } else if (raw.length > 3) {
        formatted = `${raw.slice(0, 3)} ${raw.slice(3)}`;
      }
    }

    setPhoneVal(formatted);

    // Validate pattern
    if (formatted && !activePhoneConfig.pattern.test(formatted)) {
      setPhoneError(activePhoneConfig.error);
    } else {
      setPhoneError("");
    }
  };

  // Sandbox 3: Searchable Combobox Options Filter
  const filteredComboboxOptions = comboboxOptions.filter(opt =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectObject = (opt) => {
    setSelectedObject(opt.label);
    setSearchTerm(opt.label);
    setSearchOpen(false);
  };

  const handleClearObject = () => {
    setSelectedObject("");
    setSearchTerm("");
    setSearchOpen(false);
  };

  // Sandbox 4: Cascading Address
  const handleCountryAddressChange = (e) => {
    const nextCountry = e.target.value;
    const prevCountry = address.country;
    if (nextCountry !== prevCountry) {
      setAddress({
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        country: nextCountry
      });
      setAddressLogs(prev => [
        `⚠️ Country changed from "${prevCountry || 'None'}" to "${nextCountry}". Cascade reset: Clearing all fields to null!`,
        ...prev
      ]);
    }
  };

  const handleAddressFieldChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  // Sandbox 5: Configurable Pattern Input
  const docConfigs = {
    aadhar: {
      label: "Aadhar Number",
      placeholder: "1234-5678-9012",
      pattern: /^\d{4}-\d{4}-\d{4}$/,
      guidance: "Must be a 12-digit number separated by hyphens after every 4 digits.",
      errorMessage: "Format must be XXXX-XXXX-XXXX (12 digits total)",
      format: "aadhar"
    },
    passport: {
      label: "Passport Number",
      placeholder: "A1234567",
      pattern: /^[A-Z][0-9]{7}$/,
      guidance: "Starts with 1 uppercase alphabet letter followed by exactly 7 numbers.",
      errorMessage: "Must start with a capital letter followed by 7 digits (e.g., K9876543)",
      format: "passport"
    },
    ssn: {
      label: "Social Security Number (SSN)",
      placeholder: "XXX-XX-XXXX",
      pattern: /^\d{3}-\d{2}-\d{4}$/,
      guidance: "Must be a 9-digit US SSN formatted with hyphens.",
      errorMessage: "Format must be XXX-XX-XXXX",
      format: "ssn"
    }
  };

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
    setDocVal("");
    setDocError("");
  };

  const handleDocValChange = (e) => {
    let value = e.target.value;
    const cfg = docConfigs[docType];

    if (cfg.format === "aadhar") {
      value = value.replace(/\D/g, "");
      if (value.length > 12) value = value.slice(0, 12);
      if (value.length > 8) {
        value = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(8)}`;
      } else if (value.length > 4) {
        value = `${value.slice(0, 4)}-${value.slice(4)}`;
      }
    } else if (cfg.format === "ssn") {
      value = value.replace(/\D/g, "");
      if (value.length > 9) value = value.slice(0, 9);
      if (value.length > 5) {
        value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
      } else if (value.length > 3) {
        value = `${value.slice(0, 3)}-${value.slice(3)}`;
      }
    } else if (cfg.format === "passport") {
      let clean = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (clean.length > 8) clean = clean.slice(0, 8);
      
      let formatted = "";
      if (clean.length > 0) {
        const first = clean[0];
        if (/[A-Z]/.test(first)) {
          formatted = first + clean.slice(1).replace(/\D/g, "");
        }
      }
      value = formatted;
    }

    setDocVal(value);

    // Validate Pattern
    if (value && !cfg.pattern.test(value)) {
      setDocError(cfg.errorMessage);
    } else {
      setDocError("");
    }
  };

  // Sandbox 6: Same As Checkbox
  const handlePrimaryNatChange = (e) => {
    const val = e.target.value;
    setPrimaryNat(val);
    setSyncLogs(prev => [`📝 Updated Primary Nationality to: "${val}"`, ...prev]);

    if (isSameNat) {
      setSecondaryNat(val);
      if (!val) {
        setIsSameNat(false);
        setSyncLogs(prev => [`⚠️ Primary Nationality is empty. Checking 'Same As' has been auto-disabled.`, ...prev]);
      } else {
        setSyncLogs(prev => [`🔄 Checkbox active: Automatically synced Secondary to "${val}"`, ...prev]);
      }
    }
  };

  const handleSameCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsSameNat(checked);
    setSyncLogs(prev => [`Toggle checkbox: Same as Primary is now: ${checked ? "CHECKED" : "UNCHECKED"}`, ...prev]);
    if (checked) {
      setSecondaryNat(primaryNat);
    }
  };

  const handleSecondaryNatChange = (e) => {
    const val = e.target.value;
    setSecondaryNat(val);
    setSyncLogs(prev => [`📝 Manual edit on Secondary Nationality: "${val}"`, ...prev]);

    // Break Sync
    if (isSameNat && val !== primaryNat) {
      setIsSameNat(false);
      setSyncLogs(prev => [`🚨 Auto-uncheck: Secondary input edited manually. Sync broken!`, ...prev]);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 }}>
      {/* Sidebar List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 }}>
          LWC Recipes Directory
        </div>
        {[
          { id: "charRestrict", name: "1. Character Limit Input", desc: "Real-time character keystroke blocker" },
          { id: "intlPhone", name: "2. International Phone", desc: "Linked dropdown country code formatting" },
          { id: "combobox", name: "3. Searchable Combobox", desc: "Interactive filtering object combobox" },
          { id: "addressCascade", name: "4. Address Field Reset", desc: "Country-driven cascading form reset" },
          { id: "patternInput", name: "5. Dynamic Guidance Input", desc: "Verification formats with regex mask" },
          { id: "sameAsCheckbox", name: "6. Address Copy Sync", desc: "Auto-uncheck two-way clone sync" }
        ].map(rec => (
          <button
            key={rec.id}
            onClick={() => setSelectedRecipe(rec.id)}
            className="hoverable"
            style={{
              textAlign: "left",
              padding: "14px 18px",
              background: selectedRecipe === rec.id ? "rgba(0,161,224,0.08)" : "rgba(255,255,255,0.02)",
              border: "1px solid " + (selectedRecipe === rec.id ? "var(--accent)" : "var(--line)"),
              borderRadius: 14,
              color: selectedRecipe === rec.id ? "white" : "var(--ink-2)",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <strong style={{ display: "block", fontSize: 13.5, marginBottom: 4 }}>{rec.name}</strong>
            <span style={{ fontSize: 11.5, color: selectedRecipe === rec.id ? "var(--accent-deep)" : "var(--ink-3)" }}>{rec.desc}</span>
          </button>
        ))}
      </div>

      {/* Main Panel */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Info Header */}
        <div style={{ background: "rgba(10,18,48,0.25)", border: "1px solid var(--line)", padding: 24, borderRadius: 18 }}>
          {selectedRecipe === "charRestrict" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Character Filter Input</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Blocks invalid keystrokes dynamically on <code>keypress</code> or <code>input</code> before they can even be entered in the HTML DOM. Prevents incorrect formats (e.g. typing letters in a numeric-only field or typing special characters in a name field) and handles paste sanitization.
              </p>
            </>
          )}
          {selectedRecipe === "intlPhone" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>International Phone Input</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Pairs a country dialing code dropdown selector directly with a telephone text input. Changing the dialing code dynamically alters the input's placeholder, pattern validation expression, and label, while custom Javascript dynamically formats the phone number format (e.g., auto-wrapping US numbers in parentheses or placing hyphens on Indian numbers).
              </p>
            </>
          )}
          {selectedRecipe === "combobox" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Searchable Combobox</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Builds a fully functional custom combobox dropdown with live filtering capabilities. Includes support for mouse clicks, clearing selections, search result overlays, and empty-state placeholders. Perfect for large dropdown selection menus.
              </p>
            </>
          )}
          {selectedRecipe === "addressCascade" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Address Form Cascade Reset</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                A complex form validation design: Address fields remain locked until a Country is chosen. If a user has entered address details (City, State, Zip) and subsequently changes the Country value, the entire address fields are reset to null. This prevents conflicting locations in database records.
              </p>
            </>
          )}
          {selectedRecipe === "patternInput" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Dynamic Pattern &amp; Validation</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Loads structural properties (Labels, Regex Patterns, Guidance help text, Custom validations) dynamically into a single input field. Based on document selector value (Aadhar Card, US SSN, Global Passport), the input dynamically checks input pattern validation and executes dynamic input masks like auto-hyphenation.
              </p>
            </>
          )}
          {selectedRecipe === "sameAsCheckbox" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Address Copy Sync Checkbox</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Implements a checkbox that replicates value bindings (e.g., Shipping Address same as Billing, or Secondary Nationality same as Primary). If the checkbox is clicked, it clones values. If the user later edits either the source or the target field, the sync is broken, and the checkbox automatically unchecks itself.
              </p>
            </>
          )}
        </div>

        {/* Two-Column Panel: Sandbox (Left) & Code Viewer (Right) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
          
          {/* Sandbox Wrapper */}
          <div className="card" style={{ padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 }}>
              <strong style={{ fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" }}>⚡ INTERACTIVE SANDBOX</strong>
              <span style={{ fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 }}>LWC SIMULATOR</span>
            </div>

            {/* Sandbox Renderings */}

            {/* SANDBOX 1: Character Acceptor */}
            {selectedRecipe === "charRestrict" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Allowed Profile Configuration</label>
                  <select 
                    value={restrictProfile} 
                    onChange={e => { setRestrictProfile(e.target.value); setSandbox1Val(""); }}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      color: "white",
                      outline: "none"
                    }}
                  >
                    <option value="digits">Digits Only ([0-9])</option>
                    <option value="alphabetic">Alphabetic Only ([a-zA-Z])</option>
                    <option value="alphanumeric">Alphanumeric ([a-zA-Z0-9])</option>
                    <option value="custom">Custom Regex Pattern (Advanced)</option>
                  </select>
                </div>

                {restrictProfile === "custom" && (
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Custom JS Regex Character Set</label>
                    <input 
                      type="text" 
                      value={customRegex} 
                      onChange={e => { setCustomRegex(e.target.value); setSandbox1Val(""); }}
                      placeholder="e.g. ^[a-zA-Z\s]*$"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--line)",
                        borderRadius: 8,
                        color: "white",
                        fontFamily: "var(--font-mono)",
                        outline: "none"
                      }}
                    />
                  </div>
                )}

                <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 16 }}>
                  <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "white", marginBottom: 6 }}>Restrictive Input Box</label>
                  <input
                    type="text"
                    value={sandbox1Val}
                    onKeyPress={handleSandbox1KeyPress}
                    onInput={handleSandbox1Input}
                    placeholder="Try typing inside..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--line)",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 15,
                      outline: "none"
                    }}
                  />
                  <small style={{ display: "block", marginTop: 6, color: "var(--ink-3)", fontSize: 11 }}>
                    Active Regex: <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>{getRegex() ? getRegex().toString() : "None"}</span>
                  </small>
                </div>

                {/* Log screen */}
                <div style={{
                  background: "#030612",
                  border: "1px solid var(--line-2)",
                  borderRadius: 10,
                  padding: 12,
                  fontFamily: "var(--font-mono)",
                  height: 120,
                  overflowY: "auto"
                }}>
                  <div style={{ fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 }}>SIMULATOR CONSOLE LOG</div>
                  {sandbox1Logs.length === 0 ? (
                    <div style={{ fontSize: 11, color: "rgba(244,248,255,0.25)" }}>Keystrokes telemetry will show up here.</div>
                  ) : (
                    sandbox1Logs.map((log, i) => (
                      <div key={i} style={{ fontSize: 11, color: log.includes("Blocked") ? "#e74c3c" : "#2ecc71", marginBottom: 4 }}>{log}</div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SANDBOX 2: International Phone Code */}
            {selectedRecipe === "intlPhone" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Country Code</label>
                    <select
                      value={selectedCountry}
                      onChange={e => handleCountryChange(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--line)",
                        borderRadius: 8,
                        color: "white",
                        outline: "none"
                      }}
                    >
                      <option value="+1">🇺🇸 US (+1)</option>
                      <option value="+91">🇮🇳 IN (+91)</option>
                      <option value="+44">🇬🇧 UK (+44)</option>
                      <option value="+61">🇦🇺 AU (+61)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>
                      {activePhoneConfig.label}
                    </label>
                    <input
                      type="text"
                      value={phoneVal}
                      onChange={handlePhoneValChange}
                      placeholder={activePhoneConfig.placeholder}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid " + (phoneError ? "#e74c3c" : "var(--line)"),
                        borderRadius: 8,
                        color: "white",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                {phoneError && (
                  <div style={{ fontSize: 12.5, color: "#e74c3c", display: "flex", alignItems: "center", gap: 6 }}>
                    ⚠️ {phoneError}
                  </div>
                )}

                <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14, fontSize: 13.5 }}>
                  <span style={{ color: "var(--ink-3)" }}>LWC Combined Output:</span>{" "}
                  <strong style={{ color: "white", fontFamily: "var(--font-mono)" }}>
                    {phoneVal ? `${selectedCountry} ${phoneVal}` : "(empty)"}
                  </strong>
                </div>
              </div>
            )}

            {/* SANDBOX 3: Searchable Combobox */}
            {selectedRecipe === "combobox" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ position: "relative" }}>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Select Salesforce Object</label>
                  
                  <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <input
                      type="text"
                      value={searchTerm}
                      placeholder="Type to search objects..."
                      disabled={!!selectedObject}
                      onFocus={() => setSearchOpen(true)}
                      onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                      onChange={e => setSearchTerm(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "11px 40px 11px 14px",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--line)",
                        borderRadius: 8,
                        color: "white",
                        outline: "none"
                      }}
                    />
                    
                    <span style={{ position: "absolute", right: 14, display: "flex", alignItems: "center" }}>
                      {selectedObject ? (
                        <button 
                          onClick={handleClearObject}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "var(--ink-3)",
                            cursor: "pointer",
                            fontSize: 14
                          }}
                        >
                          ✕
                        </button>
                      ) : (
                        <span style={{ opacity: 0.4, fontSize: 14 }}>🔍</span>
                      )}
                    </span>
                  </div>

                  {searchOpen && (
                    <div style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      zIndex: 10,
                      background: "var(--card-solid)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      marginTop: 4,
                      maxHeight: 180,
                      overflowY: "auto",
                      boxShadow: "var(--shadow-3)"
                    }}>
                      {filteredComboboxOptions.length === 0 ? (
                        <div style={{ padding: "10px 14px", color: "var(--ink-3)", fontSize: 12.5 }}>No objects match.</div>
                      ) : (
                        filteredComboboxOptions.map(opt => (
                          <div
                            key={opt.value}
                            onMouseDown={() => handleSelectObject(opt)}
                            style={{
                              padding: "10px 14px",
                              cursor: "pointer",
                              borderBottom: "1px solid var(--line-2)",
                              transition: "background 0.15s"
                            }}
                            className="hover-bg-line"
                          >
                            <div style={{ color: "white", fontSize: 13.5, fontWeight: 600 }}>{opt.label}</div>
                            <div style={{ color: "var(--ink-3)", fontSize: 11, marginTop: 2 }}>{opt.desc}</div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>

                <div style={{ background: "rgba(0,161,224,0.04)", border: "1px solid rgba(0,161,224,0.1)", borderRadius: 10, padding: 14, fontSize: 13 }}>
                  <span style={{ color: "var(--ink-3)" }}>LWC Selection State:</span>{" "}
                  <strong style={{ color: "var(--accent-deep)", fontFamily: "var(--font-mono)" }}>
                    {selectedObject ? selectedObject : "null"}
                  </strong>
                </div>
              </div>
            )}

            {/* SANDBOX 4: Address Fields Cascade */}
            {selectedRecipe === "addressCascade" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Country (Master dropdown)</label>
                  <select
                    value={address.country}
                    onChange={handleCountryAddressChange}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      color: "white",
                      outline: "none"
                    }}
                  >
                    <option value="">-- Choose Country --</option>
                    <option value="US">🇺🇸 United States</option>
                    <option value="IN">🇮🇳 India</option>
                    <option value="CA">🇨🇦 Canada</option>
                    <option value="UK">🇬🇧 United Kingdom</option>
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ gridColumn: "span 2" }}>
                    <label style={{ display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 4 }}>Address Line 1</label>
                    <input
                      type="text"
                      name="street1"
                      value={address.street1}
                      disabled={!address.country}
                      onChange={handleAddressFieldChange}
                      placeholder={!address.country ? "Select country first" : "123 Main St"}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        background: address.country ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.01)",
                        border: "1px solid var(--line)",
                        borderRadius: 6,
                        color: "white",
                        outline: "none",
                        opacity: address.country ? 1 : 0.4
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 4 }}>City</label>
                    <input
                      type="text"
                      name="city"
                      value={address.city}
                      disabled={!address.country}
                      onChange={handleAddressFieldChange}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        background: address.country ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.01)",
                        border: "1px solid var(--line)",
                        borderRadius: 6,
                        color: "white",
                        outline: "none",
                        opacity: address.country ? 1 : 0.4
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 4 }}>State</label>
                    <input
                      type="text"
                      name="state"
                      value={address.state}
                      disabled={!address.country}
                      onChange={handleAddressFieldChange}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        background: address.country ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.01)",
                        border: "1px solid var(--line)",
                        borderRadius: 6,
                        color: "white",
                        outline: "none",
                        opacity: address.country ? 1 : 0.4
                      }}
                    />
                  </div>
                </div>

                <div style={{
                  background: "#030612",
                  border: "1px solid var(--line-2)",
                  borderRadius: 10,
                  padding: 10,
                  fontFamily: "var(--font-mono)",
                  height: 100,
                  overflowY: "auto",
                  fontSize: 11
                }}>
                  <div style={{ fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 4 }}>STATE LOG</div>
                  {addressLogs.length === 0 ? (
                    <div style={{ color: "rgba(255,255,255,0.15)" }}>Change the country to see cascade reset in action.</div>
                  ) : (
                    addressLogs.map((log, i) => (
                      <div key={i} style={{ color: "#f1c40f", marginBottom: 3 }}>{log}</div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SANDBOX 5: Dynamic Guidance Input */}
            {selectedRecipe === "patternInput" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Select Verification Document</label>
                  <select
                    value={docType}
                    onChange={handleDocTypeChange}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      color: "white",
                      outline: "none"
                    }}
                  >
                    <option value="aadhar">Aadhar Card (India)</option>
                    <option value="passport">Passport (Global)</option>
                    <option value="ssn">SSN (US)</option>
                  </select>
                </div>

                <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 16 }}>
                  <label style={{ display: "block", fontSize: 13.5, color: "white", marginBottom: 6 }}>
                    {docConfigs[docType].label}
                  </label>
                  <input
                    type="text"
                    value={docVal}
                    onChange={handleDocValChange}
                    placeholder={docConfigs[docType].placeholder}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid " + (docError ? "#e74c3c" : "var(--line)"),
                      borderRadius: 8,
                      color: "white",
                      outline: "none"
                    }}
                  />
                  <small style={{ display: "block", marginTop: 8, color: "var(--ink-2)", fontSize: 11.5 }}>
                    💡 <strong style={{ color: "var(--accent-deep)" }}>Guidance:</strong> {docConfigs[docType].guidance}
                  </small>
                </div>

                {docError && (
                  <div style={{ fontSize: 12.5, color: "#e74c3c", display: "flex", alignItems: "center", gap: 6 }}>
                    ⚠️ {docError}
                  </div>
                )}
              </div>
            )}

            {/* SANDBOX 6: Same As Checkbox */}
            {selectedRecipe === "sameAsCheckbox" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Primary Nationality</label>
                  <input
                    type="text"
                    value={primaryNat}
                    onChange={handlePrimaryNatChange}
                    placeholder="e.g. Indian, American"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      color: "white",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "6px 0" }}>
                  <input
                    type="checkbox"
                    id="same-checkbox"
                    checked={isSameNat}
                    disabled={!primaryNat}
                    onChange={handleSameCheckboxChange}
                    style={{
                      width: 17,
                      height: 17,
                      cursor: primaryNat ? "pointer" : "not-allowed"
                    }}
                  />
                  <label htmlFor="same-checkbox" style={{ fontSize: 13, color: primaryNat ? "white" : "var(--ink-3)", cursor: primaryNat ? "pointer" : "not-allowed" }}>
                    Secondary Nationality is Same as Primary
                  </label>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Secondary Nationality</label>
                  <input
                    type="text"
                    value={secondaryNat}
                    onChange={handleSecondaryNatChange}
                    placeholder="Enter secondary nationality"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      color: "white",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{
                  background: "#030612",
                  border: "1px solid var(--line-2)",
                  borderRadius: 10,
                  padding: 10,
                  fontFamily: "var(--font-mono)",
                  height: 100,
                  overflowY: "auto",
                  fontSize: 11
                }}>
                  <div style={{ fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 4 }}>TELEMETRY SYNCLOG</div>
                  {syncLogs.length === 0 ? (
                    <div style={{ color: "rgba(255,255,255,0.15)" }}>Inputs and checkbox telemetry will log here.</div>
                  ) : (
                    syncLogs.map((log, i) => (
                      <div key={i} style={{ color: log.includes("Auto-uncheck") || log.includes("broken") ? "#e74c3c" : "rgba(244,248,255,0.65)", marginBottom: 3 }}>{log}</div>
                    ))
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Code Viewer Panel (Right) */}
          <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, border: "1px solid var(--line)", background: "rgba(3,6,18,0.7)" }}>
            
            {/* Tabs & Actions Bar */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              borderBottom: "1px solid var(--line)", 
              padding: "10px 16px",
              background: "rgba(255,255,255,0.02)"
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {[
                  { id: "html", label: ".html" },
                  { id: "js", label: ".js" },
                  { id: "xml", label: "-meta.xml" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      background: activeTab === tab.id ? "rgba(0,161,224,0.12)" : "transparent",
                      border: "none",
                      color: activeTab === tab.id ? "white" : "var(--ink-3)",
                      fontSize: 12.5,
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer"
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Copy Button */}
              <button 
                className="btn ghost hoverable"
                onClick={copyCode}
                style={{
                  padding: "6px 14px",
                  fontSize: 11,
                  border: "1px solid var(--line-2)",
                  borderRadius: 6,
                  height: "auto",
                  margin: 0
                }}
              >
                {copied ? "✓ Copied!" : "📋 Copy Code"}
              </button>
            </div>

            {/* Code Text Window */}
            <pre style={{
              margin: 0,
              padding: 20,
              overflowX: "auto",
              fontSize: 12.5,
              lineHeight: 1.5,
              fontFamily: "var(--font-mono)",
              color: "rgba(244,248,255,0.85)",
              background: "rgba(0,0,0,0.2)",
              height: 340,
              overflowY: "auto"
            }}>
              <code>
                {RECIPE_CODES[selectedRecipe][activeTab]}
              </code>
            </pre>
          </div>

        </div>

      </div>

      <style>{`
        .hover-bg-line:hover {
          background: rgba(0, 161, 224, 0.08) !important;
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { PageLwcRecipes });

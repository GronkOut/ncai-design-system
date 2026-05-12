import * as React from 'react';
import { Accordion } from '@base-ui/react/accordion';
import { AlertDialog } from '@base-ui/react/alert-dialog';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { Avatar } from '@base-ui/react/avatar';
import { Button } from '@base-ui/react/button';
import { Checkbox } from '@base-ui/react/checkbox';
import { CheckboxGroup } from '@base-ui/react/checkbox-group';
import { Collapsible } from '@base-ui/react/collapsible';
import { Combobox } from '@base-ui/react/combobox';
import { ContextMenu } from '@base-ui/react/context-menu';
import { Dialog } from '@base-ui/react/dialog';
import { Drawer } from '@base-ui/react/drawer';
import { Field } from '@base-ui/react/field';
import { Fieldset } from '@base-ui/react/fieldset';
import { Form } from '@base-ui/react/form';
import { Input } from '@base-ui/react/input';
import { Menu } from '@base-ui/react/menu';
import { Menubar } from '@base-ui/react/menubar';
import { Meter } from '@base-ui/react/meter';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { NumberField } from '@base-ui/react/number-field';
import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import { Popover } from '@base-ui/react/popover';
import { PreviewCard } from '@base-ui/react/preview-card';
import { Progress } from '@base-ui/react/progress';
import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { Select } from '@base-ui/react/select';
import { Separator } from '@base-ui/react/separator';
import { Slider } from '@base-ui/react/slider';
import { Switch } from '@base-ui/react/switch';
import { Tabs } from '@base-ui/react/tabs';
import { Toast } from '@base-ui/react/toast';
import { Toggle } from '@base-ui/react/toggle';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toolbar } from '@base-ui/react/toolbar';
import { Tooltip } from '@base-ui/react/tooltip';
import checkIcon from '@ncai/design-system-icons/icons/ic_check.svg';
import chevronDownIcon from '@ncai/design-system-icons/icons/ic_chevron_down.svg';

const products = ['Vision Pro', 'MacBook Air', 'iPhone 17 Pro', 'Apple Watch', 'AirPods Pro'];
const locations = ['Cupertino', 'Seoul', 'Tokyo', 'New York', 'London'];
const sections = [
  'Accordion',
  'Alert Dialog',
  'Autocomplete',
  'Avatar',
  'Button',
  'Checkbox',
  'Checkbox Group',
  'Collapsible',
  'Combobox',
  'Context Menu',
  'Dialog',
  'Drawer',
  'Field',
  'Fieldset',
  'Form',
  'Input',
  'Menu',
  'Menubar',
  'Meter',
  'Navigation Menu',
  'Number Field',
  'OTP Field',
  'Popover',
  'Preview Card',
  'Progress',
  'Radio',
  'Scroll Area',
  'Select',
  'Separator',
  'Slider',
  'Switch',
  'Tabs',
  'Toast',
  'Toggle',
  'Toggle Group',
  'Toolbar',
  'Tooltip'
];

export function App() {
  return (
    <Toast.Provider>
      <Tooltip.Provider>
        <div className="app-shell">
          <header className="global-nav" aria-label="Preview navigation">
            <span className="brand-mark">NC AI</span>
            <nav>
              <a href="#gallery">Components</a>
              <a href="#tokens">Design Tokens</a>
              <a href="#handoff">Handoff</a>
            </nav>
            <Button className="nav-action">Preview</Button>
          </header>

          <main>
            <section className="hero-tile">
              <p className="eyebrow">Base UI + current design-system.md</p>
              <h1>Design system preview surface</h1>
              <p className="hero-copy">
                Base UI primitives are rendered with the current Apple-inspired NC AI design language. When the markdown
                design system changes, this page is the target surface agents can restyle quickly.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#gallery">
                  View components
                </a>
                <a className="button-secondary" href="#tokens">
                  Inspect tokens
                </a>
              </div>
            </section>

            <section className="sub-nav" id="tokens">
              <strong>Preview</strong>
              <span>37 Base UI components</span>
              <span>single accent #0066cc</span>
              <span>pill actions + quiet chrome</span>
            </section>

            <section className="gallery-intro" id="gallery">
              <p className="eyebrow">One scrollable page</p>
              <h2>All Base UI components</h2>
              <p>
                Every card keeps the Base UI accessibility structure in place and applies the visual language through
                reusable CSS classes.
              </p>
            </section>

            <div className="component-grid">
              <PreviewSection title="Accordion" description="Collapsible product information panels.">
                <Accordion.Root defaultValue={['display']} className="accordion">
                  <Accordion.Item value="display" className="accordion-item">
                    <Accordion.Header>
                      <Accordion.Trigger className="accordion-trigger">Display and finish</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className="accordion-panel">
                      A seamless aluminum enclosure, calibrated display, and quiet transitions between surfaces.
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="battery" className="accordion-item">
                    <Accordion.Header>
                      <Accordion.Trigger className="accordion-trigger">Battery life</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className="accordion-panel">
                      Designed for all-day work with a compact charging ritual and clear status feedback.
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion.Root>
              </PreviewSection>

              <PreviewSection title="Alert Dialog" description="A blocking confirmation flow.">
                <AlertDialog.Root>
                  <AlertDialog.Trigger className="button-primary">Erase device</AlertDialog.Trigger>
                  <AlertDialog.Portal>
                    <AlertDialog.Backdrop className="overlay-backdrop" />
                    <AlertDialog.Popup className="modal-card">
                      <AlertDialog.Title className="modal-title">Erase all content?</AlertDialog.Title>
                      <AlertDialog.Description className="modal-copy">
                        This preview uses an alert dialog for irreversible decisions.
                      </AlertDialog.Description>
                      <div className="inline-actions">
                        <AlertDialog.Close className="button-secondary">Cancel</AlertDialog.Close>
                        <AlertDialog.Close className="button-primary">Erase</AlertDialog.Close>
                      </div>
                    </AlertDialog.Popup>
                  </AlertDialog.Portal>
                </AlertDialog.Root>
              </PreviewSection>

              <PreviewSection title="Autocomplete" description="Filtered suggestions for search-like input.">
                <Autocomplete.Root items={products}>
                  <Autocomplete.InputGroup className="combo-root combo-input-group">
                    <Autocomplete.Input placeholder="Search products" className="text-input" />
                    <Autocomplete.Trigger className="icon-button" aria-label="Open product suggestions">
                      <img src={chevronDownIcon} alt="" className="trigger-icon" />
                    </Autocomplete.Trigger>
                  </Autocomplete.InputGroup>
                  <Autocomplete.Portal>
                    <Autocomplete.Positioner className="autocomplete-positioner" sideOffset={6}>
                      <Autocomplete.Popup className="autocomplete-popup">
                        <Autocomplete.Empty className="empty-state">No products found.</Autocomplete.Empty>
                        <Autocomplete.List className="autocomplete-list">
                          {(item: string) => (
                            <Autocomplete.Item key={item} value={item} className="autocomplete-item">
                              {item}
                            </Autocomplete.Item>
                          )}
                        </Autocomplete.List>
                      </Autocomplete.Popup>
                    </Autocomplete.Positioner>
                  </Autocomplete.Portal>
                </Autocomplete.Root>
              </PreviewSection>

              <PreviewSection title="Avatar" description="A product specialist avatar fallback.">
                <div className="avatar-row">
                  <Avatar.Root className="avatar">
                    <Avatar.Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop" />
                    <Avatar.Fallback>AP</Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <strong>Apple Preview</strong>
                    <p>Design review specialist</p>
                  </div>
                </div>
              </PreviewSection>

              <PreviewSection title="Button" description="Primary, secondary, and utility action grammar.">
                <div className="inline-actions">
                  <Button className="button-primary">Buy</Button>
                  <Button className="button-secondary">Learn more</Button>
                  <Button className="button-utility">Bag</Button>
                </div>
              </PreviewSection>

              <PreviewSection title="Checkbox" description="A single opt-in control.">
                <label className="check-row">
                  <Checkbox.Root defaultChecked className="checkbox">
                    <Checkbox.Indicator className="check-indicator">
                      <img src={checkIcon} alt="" className="check-icon" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  Notify me when the preview changes
                </label>
              </PreviewSection>

              <PreviewSection title="Checkbox Group" description="Shared state across multiple checks.">
                <CheckboxGroup className="choice-stack" defaultValue={['finish']}>
                  {[
                    ['finish', 'Match finish tokens'],
                    ['spacing', 'Audit spacing rhythm'],
                    ['copy', 'Review product copy']
                  ].map(([value, label]) => (
                    <label className="check-row" key={value}>
                      <Checkbox.Root value={value} className="checkbox">
                        <Checkbox.Indicator className="check-indicator">
                          <img src={checkIcon} alt="" className="check-icon" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      {label}
                    </label>
                  ))}
                </CheckboxGroup>
              </PreviewSection>

              <PreviewSection title="Collapsible" description="A disclosure panel for compact detail.">
                <Collapsible.Root className="collapsible">
                  <Collapsible.Trigger className="button-secondary">Show environmental note</Collapsible.Trigger>
                  <Collapsible.Panel className="soft-panel">
                    Built with recycled materials and a quieter, parchment-toned information panel.
                  </Collapsible.Panel>
                </Collapsible.Root>
              </PreviewSection>

              <PreviewSection title="Combobox" description="Input and predefined selection combined.">
                <Combobox.Root items={locations}>
                  <Combobox.InputGroup className="combo-root combo-input-group">
                    <Combobox.Input placeholder="Choose a store" className="text-input" />
                    <Combobox.Trigger className="icon-button" aria-label="Open store suggestions">
                      <img src={chevronDownIcon} alt="" className="trigger-icon" />
                    </Combobox.Trigger>
                  </Combobox.InputGroup>
                  <Combobox.Portal>
                    <Combobox.Positioner className="autocomplete-positioner" sideOffset={6}>
                      <Combobox.Popup className="autocomplete-popup">
                        <Combobox.Empty className="empty-state">No stores found.</Combobox.Empty>
                        <Combobox.List className="autocomplete-list">
                          {(item: string) => (
                            <Combobox.Item key={item} value={item} className="autocomplete-item">
                              {item}
                            </Combobox.Item>
                          )}
                        </Combobox.List>
                      </Combobox.Popup>
                    </Combobox.Positioner>
                  </Combobox.Portal>
                </Combobox.Root>
              </PreviewSection>

              <PreviewSection title="Context Menu" description="Right-click the tile area.">
                <ContextMenu.Root>
                  <ContextMenu.Trigger className="context-target">
                    Right-click or long-press this product tile.
                  </ContextMenu.Trigger>
                  <ContextMenu.Portal>
                    <ContextMenu.Positioner className="positioner">
                      <ContextMenu.Popup className="menu-popup">
                        <ContextMenu.Item className="menu-item">Open product page</ContextMenu.Item>
                        <ContextMenu.Item className="menu-item">Compare models</ContextMenu.Item>
                        <ContextMenu.Separator className="menu-separator" />
                        <ContextMenu.Item className="menu-item">Share</ContextMenu.Item>
                      </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                  </ContextMenu.Portal>
                </ContextMenu.Root>
              </PreviewSection>

              <PreviewSection title="Dialog" description="Standard modal detail.">
                <Dialog.Root>
                  <Dialog.Trigger className="button-primary">Open details</Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Backdrop className="overlay-backdrop" />
                    <Dialog.Popup className="modal-card">
                      <Dialog.Title className="modal-title">Preview details</Dialog.Title>
                      <Dialog.Description className="modal-copy">
                        Dialog content uses the same white utility-card surface and pill actions.
                      </Dialog.Description>
                      <Dialog.Close className="button-primary">Done</Dialog.Close>
                    </Dialog.Popup>
                  </Dialog.Portal>
                </Dialog.Root>
              </PreviewSection>

              <PreviewSection title="Drawer" description="A bottom sheet for focused configuration.">
                <Drawer.Root>
                  <Drawer.Trigger className="button-primary">Configure</Drawer.Trigger>
                  <Drawer.Portal>
                    <Drawer.Backdrop className="overlay-backdrop" />
                    <Drawer.Popup className="drawer-card">
                      <Drawer.Title className="modal-title">Choose your finish</Drawer.Title>
                      <Drawer.Description className="modal-copy">
                        Swipe-to-dismiss drawer styled as a frosted Apple purchase surface.
                      </Drawer.Description>
                      <div className="chip-row">
                        <button className="option-chip selected">Natural Titanium</button>
                        <button className="option-chip">Deep Blue</button>
                      </div>
                      <Drawer.Close className="button-primary">Apply</Drawer.Close>
                    </Drawer.Popup>
                  </Drawer.Portal>
                </Drawer.Root>
              </PreviewSection>

              <PreviewSection title="Field" description="Label, input, and validation hint.">
                <Field.Root name="email" className="field-root">
                  <Field.Label className="field-label">Email</Field.Label>
                  <Field.Control className="text-input" required type="email" placeholder="you@example.com" />
                  <Field.Description className="field-help">Used for order status updates.</Field.Description>
                  <Field.Error className="field-error">Enter a valid email.</Field.Error>
                </Field.Root>
              </PreviewSection>

              <PreviewSection title="Fieldset" description="A grouped purchase option set.">
                <Fieldset.Root className="fieldset">
                  <Fieldset.Legend className="fieldset-legend">Delivery method</Fieldset.Legend>
                  <RadioGroup name="delivery" defaultValue="pickup" className="choice-stack">
                    <label className="check-row">
                      <Radio.Root value="pickup" className="radio">
                        <Radio.Indicator className="radio-indicator" />
                      </Radio.Root>
                      Pickup today
                    </label>
                    <label className="check-row">
                      <Radio.Root value="ship" className="radio">
                        <Radio.Indicator className="radio-indicator" />
                      </Radio.Root>
                      Ship to address
                    </label>
                  </RadioGroup>
                </Fieldset.Root>
              </PreviewSection>

              <PreviewSection title="Form" description="A compact form with Base UI submission handling.">
                <Form className="form-card" onSubmit={(event) => event.preventDefault()}>
                  <Field.Root name="name" className="field-root">
                    <Field.Label className="field-label">Name</Field.Label>
                    <Field.Control className="text-input" required placeholder="Preview user" />
                  </Field.Root>
                  <Button type="submit" className="button-primary">
                    Submit
                  </Button>
                </Form>
              </PreviewSection>

              <PreviewSection title="Input" description="Standalone input styled as a pill search field.">
                <Input className="text-input search-input" placeholder="Search accessories" />
              </PreviewSection>

              <PreviewSection title="Menu" description="Dropdown actions with keyboard navigation.">
                <Menu.Root>
                  <Menu.Trigger className="button-secondary">Open menu</Menu.Trigger>
                  <Menu.Portal>
                    <Menu.Positioner className="positioner">
                      <Menu.Popup className="menu-popup">
                        <Menu.Item className="menu-item">Add to bag</Menu.Item>
                        <Menu.Item className="menu-item">Save for later</Menu.Item>
                        <Menu.Separator className="menu-separator" />
                        <Menu.CheckboxItem className="menu-item">Include AppleCare</Menu.CheckboxItem>
                      </Menu.Popup>
                    </Menu.Positioner>
                  </Menu.Portal>
                </Menu.Root>
              </PreviewSection>

              <PreviewSection title="Menubar" description="Application-style command bar.">
                <Menubar className="menubar">
                  <Menu.Root>
                    <Menu.Trigger className="menubar-trigger">Store</Menu.Trigger>
                    <Menu.Portal>
                      <Menu.Positioner className="positioner">
                        <Menu.Popup className="menu-popup">
                          <Menu.Item className="menu-item">Shop Mac</Menu.Item>
                          <Menu.Item className="menu-item">Shop iPhone</Menu.Item>
                        </Menu.Popup>
                      </Menu.Positioner>
                    </Menu.Portal>
                  </Menu.Root>
                  <Menu.Root>
                    <Menu.Trigger className="menubar-trigger">Support</Menu.Trigger>
                    <Menu.Portal>
                      <Menu.Positioner className="positioner">
                        <Menu.Popup className="menu-popup">
                          <Menu.Item className="menu-item">Repairs</Menu.Item>
                          <Menu.Item className="menu-item">Coverage</Menu.Item>
                        </Menu.Popup>
                      </Menu.Positioner>
                    </Menu.Portal>
                  </Menu.Root>
                </Menubar>
              </PreviewSection>

              <PreviewSection title="Meter" description="A bounded measurement indicator.">
                <Meter.Root value={72} min={0} max={100} className="meter-root">
                  <div className="meter-meta">
                    <Meter.Label>Recycled aluminum</Meter.Label>
                    <Meter.Value />
                  </div>
                  <Meter.Track className="meter-track">
                    <Meter.Indicator className="meter-indicator" />
                  </Meter.Track>
                </Meter.Root>
              </PreviewSection>

              <PreviewSection title="Navigation Menu" description="Site navigation with preview content.">
                <NavigationMenu.Root className="nav-menu-root">
                  <NavigationMenu.List className="nav-menu-list">
                    <NavigationMenu.Item value="products">
                      <NavigationMenu.Trigger className="nav-menu-trigger">
                        Products
                        <img src={chevronDownIcon} alt="" className="nav-menu-icon" />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content">
                        <NavigationMenu.Link className="nav-menu-feature" href="#gallery">
                          <span>iPhone 17 Pro</span>
                          <small>Preview the flagship product surface.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>MacBook Air</span>
                          <small>Thin hardware, soft shadows, clean type.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>Apple Watch</span>
                          <small>Compact cards for glanceable details.</small>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item value="design">
                      <NavigationMenu.Trigger className="nav-menu-trigger">
                        Design
                        <img src={chevronDownIcon} alt="" className="nav-menu-icon" />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content nav-menu-content-compact">
                        <NavigationMenu.Link className="nav-menu-link" href="#components">
                          <span>Tokens</span>
                          <small>Color, radius, spacing, and shadows.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#components">
                          <span>Components</span>
                          <small>Base UI primitives with NC AI styling.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#components">
                          <span>Patterns</span>
                          <small>Reusable interaction and layout examples.</small>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item value="resources">
                      <NavigationMenu.Trigger className="nav-menu-trigger">
                        Resources
                        <img src={chevronDownIcon} alt="" className="nav-menu-icon" />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content nav-menu-content-compact">
                        <NavigationMenu.Link className="nav-menu-link" href="#components">
                          <span>Preview guide</span>
                          <small>Use this page to audit design changes.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#components">
                          <span>Icon package</span>
                          <small>Installable SVG assets for products.</small>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                  <NavigationMenu.Portal>
                    <NavigationMenu.Positioner className="nav-menu-positioner" align="start" sideOffset={8}>
                      <NavigationMenu.Popup className="nav-menu-popup">
                        <NavigationMenu.Viewport className="nav-menu-viewport" />
                      </NavigationMenu.Popup>
                    </NavigationMenu.Positioner>
                  </NavigationMenu.Portal>
                </NavigationMenu.Root>
              </PreviewSection>

              <PreviewSection title="Number Field" description="Increment, decrement, and numeric input.">
                <NumberField.Root defaultValue={1} min={1} max={9} className="number-field">
                  <NumberField.Group className="number-group">
                    <NumberField.Decrement className="stepper-button">−</NumberField.Decrement>
                    <NumberField.Input className="number-input" />
                    <NumberField.Increment className="stepper-button">+</NumberField.Increment>
                  </NumberField.Group>
                </NumberField.Root>
              </PreviewSection>

              <PreviewSection title="OTP Field" description="One-time code entry.">
                <div className="otp-field">
                  <label className="field-label" htmlFor="preview-verification-code">
                    Verification code
                  </label>
                  <OTPField.Root id="preview-verification-code" className="otp-root" length={6}>
                    {Array.from({ length: 6 }, (_, index) => (
                      <OTPField.Input
                        key={index}
                        className="otp-input"
                        aria-label={index === 0 ? undefined : `Verification character ${index + 1} of 6`}
                      />
                    ))}
                  </OTPField.Root>
                </div>
              </PreviewSection>

              <PreviewSection title="Popover" description="Anchored supplemental content.">
                <Popover.Root>
                  <Popover.Trigger className="button-secondary">Delivery info</Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Positioner className="popover-positioner" align="start" sideOffset={10}>
                      <Popover.Popup className="popover-card">
                        <Popover.Arrow className="popup-arrow" />
                        <Popover.Title className="popover-title">Pickup available</Popover.Title>
                        <Popover.Description className="modal-copy">
                          Order now and pick up from a nearby store today.
                        </Popover.Description>
                      </Popover.Popup>
                    </Popover.Positioner>
                  </Popover.Portal>
                </Popover.Root>
              </PreviewSection>

              <PreviewSection title="Preview Card" description="Hover card for richer link previews.">
                <PreviewCard.Root>
                  <PreviewCard.Trigger className="text-link" href="#gallery">
                    Preview product photography
                  </PreviewCard.Trigger>
                  <PreviewCard.Portal>
                    <PreviewCard.Positioner className="positioner">
                      <PreviewCard.Popup className="preview-card">
                        <div className="mini-product" />
                        <strong>Photography-first tile</strong>
                        <p>Content recedes so the product surface carries the interaction.</p>
                      </PreviewCard.Popup>
                    </PreviewCard.Positioner>
                  </PreviewCard.Portal>
                </PreviewCard.Root>
              </PreviewSection>

              <PreviewSection title="Progress" description="Task progress visualization.">
                <Progress.Root value={64} className="progress-root">
                  <Progress.Track className="progress-track">
                    <Progress.Indicator className="progress-indicator" />
                  </Progress.Track>
                </Progress.Root>
              </PreviewSection>

              <PreviewSection title="Radio" description="Single selection within a set.">
                <RadioGroup className="choice-stack" name="finish" defaultValue="Silver" aria-label="Finish">
                  {['Silver', 'Space Black', 'Natural Titanium'].map((finish, index) => (
                    <label className="check-row" key={finish}>
                      <Radio.Root value={finish} className="radio">
                        <Radio.Indicator className="radio-indicator" />
                      </Radio.Root>
                      {finish}
                    </label>
                  ))}
                </RadioGroup>
              </PreviewSection>

              <PreviewSection title="Scroll Area" description="Custom scroll container for dense content.">
                <ScrollArea.Root className="scroll-root">
                  <ScrollArea.Viewport className="scroll-viewport">
                    {sections.map((section) => (
                      <p key={section}>{section} is represented in this preview surface.</p>
                    ))}
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar className="scrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="scroll-thumb" />
                  </ScrollArea.Scrollbar>
                </ScrollArea.Root>
              </PreviewSection>

              <PreviewSection title="Select" description="Dropdown selection with item indicators.">
                <Select.Root defaultValue="iphone">
                  <Select.Trigger className="select-trigger" aria-label="Choose a product category">
                    <Select.Value />
                    <Select.Icon className="select-icon">
                      <img src={chevronDownIcon} alt="" className="trigger-icon" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Positioner
                      className="autocomplete-positioner"
                      align="start"
                      alignItemWithTrigger={false}
                      sideOffset={6}
                    >
                      <Select.Popup className="autocomplete-popup autocomplete-list">
                        {[
                          ['iphone', 'iPhone'],
                          ['mac', 'Mac'],
                          ['watch', 'Watch']
                        ].map(([value, label]) => (
                          <Select.Item key={value} value={value} className="autocomplete-item select-item">
                            <Select.ItemIndicator className="select-item-indicator">
                              <img src={checkIcon} alt="" className="select-check-icon" />
                            </Select.ItemIndicator>
                            <Select.ItemText>{label}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Popup>
                    </Select.Positioner>
                  </Select.Portal>
                </Select.Root>
              </PreviewSection>

              <PreviewSection title="Separator" description="Accessible visual separation.">
                <div className="separator-demo">
                  <span>Overview</span>
                  <Separator className="separator" />
                  <span>Specifications</span>
                </div>
              </PreviewSection>

              <PreviewSection title="Slider" description="Range input with Apple-blue indicator.">
                <Slider.Root defaultValue={40} className="slider-root">
                  <Slider.Control className="slider-control">
                    <Slider.Track className="slider-track">
                      <Slider.Indicator className="slider-indicator" />
                      <Slider.Thumb className="slider-thumb" />
                    </Slider.Track>
                  </Slider.Control>
                </Slider.Root>
              </PreviewSection>

              <PreviewSection title="Switch" description="On/off setting control.">
                <label className="switch-row">
                  <Switch.Root defaultChecked className="switch">
                    <Switch.Thumb className="switch-thumb" />
                  </Switch.Root>
                  Automatic updates
                </label>
              </PreviewSection>

              <PreviewSection title="Tabs" description="Related panels in a single card.">
                <Tabs.Root defaultValue="overview" className="tabs-root">
                  <Tabs.List className="tabs-list">
                    <Tabs.Tab value="overview" className="tab">
                      Overview
                    </Tabs.Tab>
                    <Tabs.Tab value="tech" className="tab">
                      Tech Specs
                    </Tabs.Tab>
                  </Tabs.List>
                  <Tabs.Panel value="overview" className="tab-panel">
                    Quiet UI, large product focus, and one clear action color.
                  </Tabs.Panel>
                  <Tabs.Panel value="tech" className="tab-panel">
                    System font stack, 17px body text, and 9999px pill radii.
                  </Tabs.Panel>
                </Tabs.Root>
              </PreviewSection>

              <PreviewSection title="Toast" description="Transient notification surface.">
                <ToastDemo />
              </PreviewSection>

              <PreviewSection title="Toggle" description="Two-state button.">
                <Toggle className="toggle-button" defaultPressed>
                  Spatial Audio
                </Toggle>
              </PreviewSection>

              <PreviewSection title="Toggle Group" description="Shared-state segmented controls.">
                <ToggleGroup className="toggle-group" defaultValue={['small']} aria-label="Case size">
                  <Toggle value="small" className="toggle-item">
                    41mm
                  </Toggle>
                  <Toggle value="large" className="toggle-item">
                    45mm
                  </Toggle>
                </ToggleGroup>
              </PreviewSection>

              <PreviewSection title="Toolbar" description="Grouped controls and actions.">
                <Toolbar.Root className="toolbar">
                  <Toolbar.Group className="toolbar-group">
                    <Toolbar.Button className="toolbar-button">⌘B</Toolbar.Button>
                    <Toolbar.Button className="toolbar-button">⌘I</Toolbar.Button>
                  </Toolbar.Group>
                  <Toolbar.Separator className="toolbar-separator" />
                  <Toolbar.Button className="toolbar-button primary">Share</Toolbar.Button>
                </Toolbar.Root>
              </PreviewSection>

              <PreviewSection title="Tooltip" description="Hint on hover or focus.">
                <Tooltip.Root>
                  <Tooltip.Trigger className="button-secondary">Hover for hint</Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Positioner className="positioner">
                      <Tooltip.Popup className="tooltip-popup">
                        <Tooltip.Arrow className="popup-arrow" />
                        Apple-style surfaces avoid extra decoration.
                      </Tooltip.Popup>
                    </Tooltip.Positioner>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </PreviewSection>
            </div>

            <section className="handoff-tile" id="handoff">
              <p className="eyebrow">Handoff note</p>
              <h2>Replace design language at the style layer</h2>
              <p>
                Future agents can keep the Base UI structure and component coverage intact, then update CSS tokens and
                class treatments from a new company design-system.md.
              </p>
            </section>
          </main>
        </div>
      </Tooltip.Provider>
    </Toast.Provider>
  );
}

function PreviewSection({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="component-card" aria-labelledby={`${slug(title)}-title`}>
      <div className="component-copy">
        <span className="component-index">{title}</span>
        <h3 id={`${slug(title)}-title`}>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="component-demo">{children}</div>
    </section>
  );
}

function ToastDemo() {
  const toastManager = Toast.useToastManager();

  return (
    <>
      <Button
        className="button-primary"
        onClick={() => {
          toastManager.add({
            title: 'Preview saved',
            description: 'The Apple-inspired token pass is visible in the gallery.'
          });
        }}
      >
        Show toast
      </Button>
      <Toast.Portal>
        <Toast.Viewport className="toast-viewport">
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast} className="toast-card">
      <Toast.Content>
        <Toast.Title className="toast-title" />
        <Toast.Description className="toast-description" />
        <Toast.Close className="toast-close">×</Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

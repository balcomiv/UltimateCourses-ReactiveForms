import { moduleMetadata } from '@storybook/angular';
import { StockInventoryModule } from '../../app/stock-inventory/stock-inventory.module';
// import { text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Todd Motto | Reactive Forms',
    decorators: [
      moduleMetadata({
        imports: [
            StockInventoryModule
        ]
      }),
      // withKnobs
    ]
};

export const FormControlsAndFormGroups = () => ({
    template: `
        <app-stock-inventory></app-stock-inventory>
    `,
    // props: {
    //     header: text('header', 'Create Account'),
    // }
});

export const ComponetizingFormGroups = () => ({
  template: `
      <app-stock-inventory></app-stock-inventory>
  `,
});

export const BindingFormControlsToSelect = () => ({
  template: `
      <app-stock-inventory></app-stock-inventory>
  `,
});

export const FormGroupCollectionsWithFormArray = () => ({
  template: `
      <app-stock-inventory></app-stock-inventory>
  `,
});
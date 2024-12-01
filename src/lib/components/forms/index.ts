import Button from './Button.svelte';
import FormButton from './FormButton.svelte';
import FormDescription from './FormDescription.svelte';
import FormElementField from './FormElementField.svelte';
import FormField from './FormField.svelte';
import FormFieldErrors from './FormFieldErrors.svelte';
import FormFieldset from './FormFieldset.svelte';
import FormLabel from './FormLabel.svelte';
import FormLegend from './FormLegend.svelte';
import Input from './Input.svelte';
import Label from './Label.svelte';
import TextArea from './TextArea.svelte';

type FormTextAreaEvent<T extends Event = Event> = T & {
	currentTarget: EventTarget & HTMLTextAreaElement;
};

type TextareaEvents = {
	blur: FormTextAreaEvent<FocusEvent>;
	change: FormTextAreaEvent<Event>;
	click: FormTextAreaEvent<MouseEvent>;
	focus: FormTextAreaEvent<FocusEvent>;
	keydown: FormTextAreaEvent<KeyboardEvent>;
	keypress: FormTextAreaEvent<KeyboardEvent>;
	keyup: FormTextAreaEvent<KeyboardEvent>;
	mouseover: FormTextAreaEvent<MouseEvent>;
	mouseenter: FormTextAreaEvent<MouseEvent>;
	mouseleave: FormTextAreaEvent<MouseEvent>;
	paste: FormTextAreaEvent<ClipboardEvent>;
	input: FormTextAreaEvent<InputEvent>;
};

export { Control as FormControl } from 'formsnap';
export {
	buttonVariants,
	type ButtonProps,
	type ButtonSize,
	type ButtonVariant,
} from './Button.svelte';
export {
	Button,
	FormButton,
	FormDescription,
	FormElementField,
	FormField,
	FormFieldErrors,
	FormFieldset,
	FormLabel,
	FormLegend,
	Input,
	Label,
	TextArea,
	type FormTextAreaEvent,
	type TextareaEvents,
};

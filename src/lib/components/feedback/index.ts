import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Toaster from './Toaster.svelte';
import TooltipContent from './TooltipContent.svelte';

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipProvider = TooltipPrimitive.Provider;

export { Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };

import { animate, style, transition, trigger,animation, useAnimation } from "@angular/animations";

// reusable animation
const fadeAnimation = animation([
    style({
        opacity: '{{ startOpacity }}'
    }),
    animate('{{ duration }}')
])
export const routeFadeStateTrigger = (params: any) => trigger('routeFadeState', [
    transition(':enter', [
       useAnimation(fadeAnimation, {params: params})
    ], {params: {startOpacity: 0, duration: '100ms'}}),
    transition(':leave', animate(300, style({ 
        opacity: 0})))
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)' ,
            opacity: 0
        }),
        animate(300)
    ]),
    transition(':leave', animate(300, 
        style({ 
            transform: 'translateY(0%)',
            opacity: 0
        })
    ))
])
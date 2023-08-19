import { h } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

export const MenuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'Buy'
                    }
                },
                { default: () => 'Купити' }
            ),
        key: 'buy',
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'Sell'
                    }
                },
                { default: () => 'Продати' }
            ),
        key: 'sell',
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'Rent'
                    }
                },
                { default: () => 'Орендувати' }
            ),
        key: 'rent',
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'AboutUs'
                    }
                },
                { default: () => 'Про нас' }
            ),
        key: 'about-us',
    }
]
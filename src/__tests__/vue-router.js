/* eslint-disable vue/one-component-per-file */
import {defineComponent} from 'vue'
import {render} from '../index'
import '@testing-library/jest-dom'

const App = defineComponent({
  name: 'App',
  props: ['to'],
  template: `<router-link :to="{to}">Learn More</router-link>`,
})

const ComponentB = defineComponent({
  name: 'ComponentB',
})

const routeRecordRaw = {
  path: '/',
  name: 'componentB',
  component: ComponentB,
}

test('Component with route', async () => {
  const {getByText} = await render(App, {
    props: {to: routeRecordRaw.name},
    routes: [routeRecordRaw],
  })

  const button = getByText('Learn More')

  expect(button).toBeInTheDocument()
  expect(button).toHaveAttribute('href', routeRecordRaw.path)
})

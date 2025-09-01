import Card from './index.vue'

Card.install = function (app: any) {
  app.component(Card.name, Card)
}

export default Card

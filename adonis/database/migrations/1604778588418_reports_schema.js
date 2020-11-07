'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.string('title', 255)
      table.text('image')
      table.string('location', 255)
      table.text('description')
      table.time('report_time')
      table.date('report_day')
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema

import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Section from '#models/section'
export default class Teacher extends BaseModel {
  // Renommer le nom de la table pour respecter les conventions de nommage de l'ETML
  public static table = 't_teacher'
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare gender: string
  @column()
  declare firstname: string
  @column()
  declare lastname: string
  @column()
  declare nickname: string
  @column()
  declare origine: string
  @column()
  declare sectionId: number // Colonne correspondant à la clé étrangère
  @belongsTo(() => Section)
  public section: ReturnType<typeof belongsTo> // Relation vers le modèle Section
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

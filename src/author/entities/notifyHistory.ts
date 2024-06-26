import { BelongsTo, Column, ForeignKey, Table, Model, HasMany, DataType } from "sequelize-typescript";
import { User } from "src/user/entities/user.entity";

@Table({ tableName: 'notify_history' })
export class NotifyHistory extends Model<NotifyHistory> {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number

  @Column({
    allowNull: false,
    comment: '通知的对象id'
  })
  obj_id: string

  @Column({
    allowNull: false,
    comment: '通知类型(question-问题通知 author-博主通知)'
  })
  notify_type: string
  
  @Column({
    allowNull: false,
    comment: '通知内容'
  })
  notify_content: string

  @ForeignKey(() => User)
  @Column({
    comment: '创建人'
  })
  uid: number

  @BelongsTo(() => User, 'uid')
  user: User
}

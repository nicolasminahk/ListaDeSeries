import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

type Genero = "accion" | "animada" | "comedia" | "drama" | "suspenso" | "terror"

@modelOptions({ schemaOptions: { collection: 'serie', timestamps: true } })
export class Serie {

    @prop({ type: () => Boolean, default: true })
    public active?: boolean

    @prop({ type: () => String, required: true })
    public titulo!: string;

    @prop({ type: () => String, required: true })
    public descripcion!: string;

    @prop({ type: () => Number, required: true })
    public Estrellas!: number;

    @prop({ type: () => Date, required: true })
    public Fecha!: Date;

    @prop({ type: () => Number, required: true })
    public precio!: number;

    @prop({ type: () => String, required: true })
    public genero!: Genero;

    @prop({ type: () => Boolean, default: false })
    public atp?: boolean
}

export default getModelForClass(Serie);
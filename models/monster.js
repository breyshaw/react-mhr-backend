import mongoose from "mongoose"

const Schema = mongoose.Schema

const monsterSchema = new Schema({
    name: String,
    imgUrl: String,
    type: {type: String, default: 'Flying Wyvern'},
    topweakness: 'String'
},{
    timestamps: true
} )

const Monster = mongoose.model('Monster', monsterSchema)

export {
    Monster
}
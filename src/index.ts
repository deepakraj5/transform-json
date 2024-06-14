import { readFileSync, writeFileSync } from "fs";
import jsonata from "jsonata";

const transformJSONData = async (template: string, data: Object) => {
    const expression = jsonata(template)
    const result = await expression.evaluate(data)

    writeFileSync('./result/result.json', JSON.stringify(result))
}

(async () => {
    const template = readFileSync('./input/template.txt', {
        encoding: 'utf-8'
    })
    const data = readFileSync('./input/data.json', {
        encoding: 'utf-8'
    })
    await transformJSONData(template, JSON.parse(data))
})()

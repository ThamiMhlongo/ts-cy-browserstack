// import fs from 'fs';
// import XLSX from 'xlsx';

import { writeFileSync } from "fs";
import * as XLSX from "xlsx";

export default class ExcelUtils {

    readExcel(): void {
        const file = 'cypress/e2e/testData/my-excel.xlsx'
        //cypress/e2e/testData/my-excel.xlsx
        const sheet = 'Sheet1'
        cy.log("started executing readExcel method")

        const workBook = XLSX.readFile("myexcel.xlsx");
        const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.testData);

        cy.log("jsonData = "+jsonData);

        // const read = ({file, sheet}) => {
        //     const buf = fs.readFileSync(file);
        //     const workbook = XLSX.read(buf, { type: 'buffer' });
        //     const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        //     cy.log("rows = "+rows);
        //     return rows
        //  }
        
        // cy.log("Excell test"+read({file, sheet}));
    }


    // try {

    // writeFileSync(
    //     "./cypress/fixtures/testData.json",
    //     JSON.stringify(jsonData, null, 4),
    //     "utf-8"
    // );
    // } catch (e) {
    // throw Error(e);
    // }

}
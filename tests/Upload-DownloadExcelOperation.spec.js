import { test } from '@playwright/test'
import ExcelJs from 'exceljs';

async function writeExcel(searchText, replaceText, change, filepath) {

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filepath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.row+output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filepath);
}

async function readExcel(worksheet, searchText) {

    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }
        });
    });
    return output;
}

// updating the Mangfo price to 350
// writeExcel('Rabbit',350,{rowChange:0,colChange:2},'D:\DownloadExcel.xlsx');

test('Upload Test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ]); 
    const filePath = 'C:/Users/santhoshraj.kovuru/Downloads/download.xlsx';
    await download.saveAs(filePath); // waits untill the download completes
    writeExcel("Mango",150, { rowChange: 0, colChange: 2 }, filePath);
    // for uploading the files from windows , playwright has an inbuilt method : setInputFiles() - to work this method, the component should be type=file
    await page.locator('input#fileinput').click();
    await page.locator('input#fileinput').setInputFiles(filePath);
});
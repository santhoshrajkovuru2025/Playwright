 
import { test, expect} from '@playwright/test'
import ExcelJs from 'exceljs';

async function writeExcel(searchText, replaceText, change, filepath) {

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filepath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.row+change.rowChange, output.column + change.colChange);
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

    const textSearch = 'Mango' ;
    const updateValue = '350' ;
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const download = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const dl = await download;
    const filepath = 'C:/Users/santhoshraj.kovuru/Downloads//download.xlsx' // or await d1.path();
    await writeExcel(textSearch,updateValue, { rowChange: 0, colChange: 2 }, filepath);
    // for uploading the files from windows , playwright has an inbuilt method : setInputFiles() - to work this method, the component should be type=file
    await page.locator('#fileinput').setInputFiles(filepath);
    const desiredRow = await page.getByRole('row').filter({has:page.getByText(textSearch)});
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);

});


/* import { test, expect } from'@playwright/test';
import ExcelJs from 'exceljs';
 
async function writeExcelTest(searchText, replaceText, change, filePath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output = readExcel(worksheet, searchText); // not async
 
  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}
 
// This does no async work, so don't mark it async.
function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output = { row: rowNumber, column: colNumber };
      }
    });
  });
  return output;
}
 
//update Mango Price to 350. 
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
 
test('Upload download excel validation', async ({ page }) => {
  const textSearch = 'Mango';
  const updateValue = '350';
 
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
 
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const dl = await download;
  const filePath = 'C:/Users/santhoshraj.kovuru/Downloads/download.xlsx'; // or await dl.path()
 
  // ✅ Ensure the edit finishes before upload
  await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
 
  await page.locator('#fileinput').setInputFiles(filePath);
 
  const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);
}); */
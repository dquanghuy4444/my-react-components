// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

// const exportToExcel = (excelData: any, fileName:string="excel") => {

//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';

//     const ws = XLSX.utils.json_to_sheet(excelData);
//     const wb = { Sheets: { 'data': ws }, SheetNames: ['Data'] };
//     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     const data = new Blob([excelBuffer], {type: fileType});
//     FileSaver.saveAs(data, fileName + fileExtension);
// }

// export default exportToExcel;

export {}
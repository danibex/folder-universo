import XLSX from 'xlsx';
export function exportToXLS(data) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');
  const excelBuffer = XLSX.write(workbook, { type: 'buffer' });
  const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const excelUrl = URL.createObjectURL(excelData);
  const link = document.createElement('a');
  link.href = excelUrl;
  link.download = 'dados.xlsx';
  link.click();
}

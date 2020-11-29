export const FILE_TYPES = [
  { name: 'associateFile', uploadLabel: 'Eligible Associate File', downloadLabel: 'Associate Data' },
  { name: 'midPointFile', uploadLabel: 'Mid-Point File', downloadLabel: 'Mid-Point Data' },
  { name: 'budgetFile', uploadLabel: 'Budget File', downloadLabel: 'Budget Data' }
];

export const API = {
  get: '/data/get',
  template: '/data/template',
  save: '/data/save',
  check: '/data/checkFile'
};

export const API_HOST = 'http://localhost:8000';
export const POST = 'post';
export const MESSAGES = {
  fileType: 'Choose a File Type',
  save: 'Error while saving file',
  success: 'File uploaded successfully..!',
  template: 'Error while fetching template',
  fileNotFound: 'Requested File not found'
};

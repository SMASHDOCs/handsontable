import settings from './table.config';
import Handsontable from '../src/index';

const root = document.getElementById('table');

const Table = new Handsontable(root, settings);


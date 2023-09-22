import React from 'react';
import { isDate, isValid, parse } from 'date-fns'

interface TableProps {
  data: object;
  columns: Array<string>;
  sortingState?: object;
}

interface sortingProps {
  key: string;
  direction: string;
}

export const TableJSON: React.FC<TableProps> = ({ data, columns }) => {
  const useSortableData = (items: any, sortingState = { key: '', direction: '' }) => {
    const [sortConfig, setSortConfig] = React.useState<sortingProps>(sortingState);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          let aChecked = isValid(parse(a[sortConfig.key], 'MM/dd/yyyy', new Date())) ? parse(a[sortConfig.key], 'MM/dd/yyyy', new Date()) : a[sortConfig.key]
          let bChecked = isValid(parse(b[sortConfig.key], 'MM/dd/yyyy', new Date())) ? parse(b[sortConfig.key], 'MM/dd/yyyy', new Date()) : b[sortConfig.key]
          
          if (aChecked < bChecked) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (aChecked > bChecked) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key: string) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };

  const { items, requestSort, sortConfig } = useSortableData(data);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  
  return (
    <table className='text-lg justify-center w-full container'>
      <thead>
        <tr className=''>
          {columns.map((column) => (
            <th 
              key={column} 
              className={`text-center cursor-pointer hover:text-gray-400 
                ${getClassNamesFor(column)}
              `}
              onClick={() => requestSort(column)}
            >{column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((row) => (
          <tr 
            key={row.id} 
            className='border-2'
          >
            {columns.map((column) => (
              <td 
                key={column} 
                className={`p-2 border-2 ${
                  row.id % 2 === 0 
                    ? 'bg-gray-300'
                    : 'bg-white'
                  }`}
              >{row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
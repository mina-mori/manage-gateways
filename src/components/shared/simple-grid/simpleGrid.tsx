import { SimpleGridProps } from '../../../models/simpleGridProps';
import './simpleGrid.css';

const SimpleGrid = (props: SimpleGridProps) => {
  return (
    <div className='simple-grid'>
      <div className='row header'>
        {props.headers.map(function (element, index) {
          return (
            <div
              key={`header${index}`}
              className='col d-flex align-items-center'
            >
              {element}
            </div>
          );
        })}
      </div>
      {props.data &&
        props.data.map(function (element, i) {
          return (
            <div className='row' key={`row_${i}`}>
              {Object.entries(element).map(function (obj: any[], index) {
                return (
                  <div
                    className={'col d-flex align-items-center'}
                    key={`data_${index}`}
                  >
                    {obj[1]}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};
export default SimpleGrid;

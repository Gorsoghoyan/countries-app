import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

function Table ({ columns, rows }) {

    return (
        <table>
            <thead>
                {rows.map((item, index) => 
                    <TableRow 
                        key={index}
                        title={item.title}
                    />
                )}
            </thead>
            <tbody>
                {columns.map((item, index) => 
                    <TableColumn
                        key={index}
                        
                    />
                )}
            </tbody>
        </table>
    );
}

export default Table;
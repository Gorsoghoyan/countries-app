
function TableColumnContent ({   }) {
    return <td></td>
}

function TableColumn ({ content }) {

    return (
        <tr>
            {content.map((item, index) => 
                <TableColumnContent 
                    key={index}

                />
            )}
        </tr>
    );
}

export default TableColumn;
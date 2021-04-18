import TableStore from "@/common/TableStore";
import StockAPI from "@/api/StockAPI.js";


export function fnStoreAllStock() {
    return new StockAPI().request(
        '?paging_filter=0&order_by=symbol',
        'get'
    )
}


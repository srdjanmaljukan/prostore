"use client";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
    page: number | string;
    totalPages: number;
    urlParamName?: string
}

const Pagination = ({page, totalPages, urlParamName}: PaginationProps) => {

    const router = useRouter();
    const searchParamc = useSearchParams();

    return ( <>Pagination</> );
}
 
export default Pagination;
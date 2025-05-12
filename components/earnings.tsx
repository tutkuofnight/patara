import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState, memo, useMemo } from "react"

import accounts from "@/data/accounts.json"

const tabs = ['1D', '1W', '1M', '1Y', 'ALL']
const transactionSizes = [10,20,30,40,50]

function walletAddressShorter(address: string) {
  const start = address.slice(0, 7);
  const end = address.slice(-5);
  return `${start}...${end}`;
}

export default function Earnings(){
  const [currentTab, setCurrentTab] = useState<string>(tabs[1])
  const [renderSize, setRenderSize] = useState<number>(transactionSizes[0])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(accounts.length / renderSize))

  const getPageNumbers = () => {
    const pageNumbers = [];
    
    pageNumbers.push(1);
    
    if (currentPage > 3) {
      pageNumbers.push('ellipsis1');
    }
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue; 
      pageNumbers.push(i);
    }
    
    if (currentPage < totalPages - 2) {
      pageNumbers.push('ellipsis2');
    }
    
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const EarningsTable = memo(() => {

    const items = useMemo(() => {
      setTotalPages(Math.ceil(accounts.length / renderSize))
      const lastItem = currentPage * renderSize;
      const firstItem = lastItem - renderSize;
      return accounts.slice(firstItem, lastItem)
    }, [renderSize, currentPage, currentTab])

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ACCOUNT</TableHead>
            <TableHead>AMOUNT IN</TableHead>
            <TableHead>AMOUNT OUT</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>VALUE</TableHead>
            <TableHead>EARNED FEE</TableHead>
            <TableHead>TIME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, key) => (
            <TableRow key={key}>
              <TableCell className="flex items-center gap-2">
                <Icon name="ProfileIcon" size={40} className="rounded-full" />
                <p>{walletAddressShorter(item.wallet_id)}</p>
              </TableCell>
              <TableCell>{item.amount_in} <span className="text-sm text-secondary-foreground ml-1 font-normal">SUI</span></TableCell>
              <TableCell>{item.amount_out} <span className="text-sm text-secondary-foreground ml-1 font-normal">USDC</span></TableCell>
              <TableCell>{`$${item.price}`}</TableCell>
              <TableCell>{`$${item.value}`}</TableCell>
              <TableCell>{`$${item.earned_fee}`}</TableCell>
              <TableCell>{item.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  })

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-normal text-2xl text-white">Earnings</h1>
        <Tabs defaultValue={tabs[1]}>
          <TabsList>
            {tabs.map((tab, index) => 
              <TabsTrigger value={tab} key={index} onClick={() => setCurrentTab(tabs[index])}>{tab}</TabsTrigger>
            )}
          </TabsList>
        </Tabs>
      </div>
      <EarningsTable />
      <div className="w-full flex flex-col gap-6 items-center justify-between bg-primary -mt-5 px-4 py-4 rounded-b-4">
        <div className="flex items-center justify-between w-full">
          <div className="z-10">
            <Select 
              defaultValue={transactionSizes[0].toString()} 
              onValueChange={(value: string) => setRenderSize(parseInt(value))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={`${transactionSizes[0]} Transactions`} />
              </SelectTrigger>
              <SelectContent>
                {transactionSizes.map((size, index) => <SelectItem value={size.toString()} key={index}>{size} Transactions</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 z-10">
            <Button size={"icon"} variant={"outline"} disabled={currentPage <= 1} onClick={() => setCurrentPage(page => page - 1)}><ArrowLeft /></Button>
            <Button size={"icon"} variant={"outline"} disabled={currentPage == totalPages} onClick={() => setCurrentPage(page => page + 1)}><ArrowRight /></Button>
          </div>
        </div>
        <Pagination className="md:-mt-[60px]">
          <PaginationContent>
            {getPageNumbers().map((pageNumber, index) => {
              if (pageNumber === 'ellipsis1' || pageNumber === 'ellipsis2') {
                return (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              
              return (
                <PaginationItem key={index}>
                  <Button 
                    size={"icon"} 
                    variant={currentPage === pageNumber ? "outline-active" : "outline"}
                    onClick={() => setCurrentPage(pageNumber as number)}
                  >{pageNumber}</Button>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
"use client"
import Image from "next/image";
import { ArrowUpRightSquare, X } from "lucide-react";
 
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "./ui/separator";

const PortfolioMore = ({data}) => {

    return ( 
    <>
    <Dialog className="">
        <DialogTrigger>
            <div className="cursor-pointer border-2 border-[#e31b6d] mt-10 py-1 px-5 hover:bg-[#e31b6d] duration-200 hover:text-white">
                了解更多
            </div>
        </DialogTrigger>
        <DialogContent className="w-11/12">
            <DialogHeader>
                <DialogTitle className="text-left text-xl">
                    {data.title}
                </DialogTitle>
                <DialogDescription className="text-left">
                    {data.subtitle.split('^t').map( (line, index) => (
                        <div key={line}>
                            {line}
                        </div>
                    ))}
                    <br/>
                    開發語言：{data.language}
                </DialogDescription>
            </DialogHeader>
            <Separator />
            <div>
                {data.body.split('^t').map( (line, index) => (
                    <div key={index}>
                        {line}
                    </div>
                ))}
            </div>
            <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                    {data.link != "" ? (
                        <a href={data.link} target="_blank">
                            <Button type="button" variant="secondary" className="flex text-white w-fit px-6 bg-[#e31b6d] rounded-none hover:bg-white hover:text-[#e31b6d] border-0">
                                <ArrowUpRightSquare width={18} className="mr-1 mt-1"/>
                                參觀作品
                            </Button>
                        </a>
                    ) : (
                        <Button type="button" variant="secondary" className="flex text-white w-fit px-6 bg-[#e31b6d] rounded-none hover:bg-white hover:text-[#e31b6d] border-0">
                            <X width={18} className="mr-1"/>
                            本項目暫無連結
                        </Button>
                    )}
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    </>
    );
}
 
export default PortfolioMore;
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { US, BR, ES } from 'country-flag-icons/react/3x2'

const SelectLanguage = () => {
  return (
    <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={
                <div className='flex flex-row items-center gap-2'>
                <US title="United States" className="h-4 w-4"/>
                English
                </div>         
            } />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="en">
                <div className='flex flex-row items-center gap-2'>
                <US title="United States" className="h-4 w-4"/>
                English
                </div>
            </SelectItem>
            <SelectItem value="pt">
                <div className='flex flex-row items-center gap-2'>
                <BR title="Brazil" className="h-4 w-4"/>
                Portuguese
                </div>
            </SelectItem>
            <SelectItem value="es">
                <div className='flex flex-row items-center gap-2'>
                <ES title="Spain" className="h-4 w-4"/>
                Spanish
                </div>
            </SelectItem>
        </SelectContent>
    </Select>
  )
}

export default SelectLanguage

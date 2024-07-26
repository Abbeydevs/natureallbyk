import { ChevronDown, FilterIcon, FilterX, FilterXIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Filter = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">
            Sort By
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter products</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Price (Low to High)</DropdownMenuItem>
          <DropdownMenuItem>Price (High to Low)</DropdownMenuItem>
          <DropdownMenuItem>Newest</DropdownMenuItem>
          <DropdownMenuItem>Oldest</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Filter;

import React from 'react'; // Make sure to import React
import Image from "next/image";
import villa1 from '../../public/villa1.jpeg'; 
import villa2 from '../../public/villa2.png'; 

import { MoreHorizontal, Filter, ArrowDownUp, Clock4 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const propertiesWithOffers = [
  {
    propertyImage: villa1,
    propertyName: 'Beautiful Villa on the Beach',
    location: 'Orlando, FL, USA',
    offerDetails: [
      {
        id: 1,
        offersCount: 6,
        pricePerNight: '$120',
        totalPrice: '$2029',
        dates: 'Apr 03 2024 - Apr 15 2024',
        nights: 6,
        guests: '4 guests',
        guestDetails: '2 Adults, 2 kids',
        username: 'username1',
        expiryHours: 2,
        expiresSoon: true
      },
      {
        id: 2,
        offersCount: 6,
        pricePerNight: '$120',
        totalPrice: '$2029',
        dates: 'Apr 03 2024 - Apr 15 2024',
        nights: 6,
        guests: '4 guests',
        guestDetails: '2 Adults, 2 kids',
        username: 'username2',
        expiryHours: 22,
        expiresSoon: false
      },
      {
        id: 3,
        offersCount: 6,
        pricePerNight: '$120',
        totalPrice: '$2029',
        dates: 'Apr 03 2024 - Apr 15 2024',
        nights: 6,
        guests: '4 guests',
        guestDetails: '2 Adults, 2 kids',
        username: 'username3',
        expiryHours: 2,
        expiresSoon: true
      },
    ]
  },
  {
    propertyImage: villa2,
    propertyName: 'Luxury Villa with Pool',
    location: 'Miami, FL, USA',
    offerDetails: [
      {
        id: 4,
        offersCount: 8,
        pricePerNight: '$250',
        totalPrice: '$4029',
        dates: 'Apr 10 2024 - Apr 20 2024',
        nights: 10,
        guests: '6 guests',
        guestDetails: '4 Adults, 2 kids',
        username: 'username4',
        expiryHours: 3,
        expiresSoon: false
      },
      {
        id: 5,
        offersCount: 5,
        pricePerNight: '$180',
        totalPrice: '$2529',
        dates: 'Apr 05 2024 - Apr 12 2024',
        nights: 7,
        guests: '4 guests',
        guestDetails: '2 Adults, 2 kids',
        username: 'username5',
        expiryHours: 1,
        expiresSoon: true
      },
    ]
  }
];

export default function Offers() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-7xl w-full h-full overflow-auto">
      <Card className="border-none">
          <CardHeader>
            <CardTitle className='mb-5'>Offers and Requests</CardTitle>
            <div className=" text-lg mt-2 flex justify-start">
              <span className="text-gray-400 mr-20">Cities (1)</span>
              <span className="font-bold text-black mb-2">Properties (1)</span>
            </div>
          </CardHeader>
          {propertiesWithOffers.map((property, propertyIndex) => (
            <React.Fragment key={propertyIndex}>
              <div className="flex justify-between items-center ml-6">
                <div className="flex items-center">
                  <Image
                    alt={property.propertyName}
                    src={property.propertyImage}
                    width={70}
                    height={70}
                    layout="fixed"
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{property.propertyName}</h3>
                    <p className="text-sm text-gray-600 ">{property.location}</p>
                    <Badge style={{ backgroundColor: '#305cf4', color: 'white', border: 'none' }}>{property.offerDetails.length} offers</Badge>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button variant="ghost">
                    <Filter className="h-5 w-5" />
                    <span className='ml-1'>Filter</span>
                  </Button>
                  <span className='text-gray-300'>|</span>
                  <Button variant="ghost">
                    <ArrowDownUp className="h-5 w-5"/> 
                    <span className='ml-1'>Sort</span>
                  </Button>
                </div>
              </div>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Price</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Guests</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Expiration</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {property.offerDetails.map((offer) => (
                      <TableRow key={offer.id}>
                        <TableCell> <span className='font-semibold'>{offer.pricePerNight} /night</span><br/>{offer.totalPrice} total</TableCell>
                        <TableCell><span className='font-semibold'>{offer.dates}</span> <br/> {offer.nights} nights</TableCell>
                        <TableCell><span className='font-semibold'>{offer.guests}</span><br/>{offer.guestDetails}</TableCell>
                        <TableCell>
                          <span style={{ textDecoration: 'underline' }}>{offer.username}</span>
                        </TableCell>
                        <TableCell>
                        <div className={`ml-2 flex items-center ${offer.expiresSoon ? 'text-red-500' : ''}`}>
                          <Clock4 width={20} height={20} />
                          <span className='ml-2'>Expires in {offer.expiryHours} hours</span>
                        </div>
                        </TableCell>
                        <TableCell>

                        <Select className="shadcn-select">
                          <SelectTrigger className="shadcn-select-trigger w-[140px]">
                            <SelectValue placeholder="Respond" />
                          </SelectTrigger>
                          <SelectContent className="shadcn-select-content">
                            <SelectItem className="shadcn-select-item hover:bg-gray-300" value="accept">Accept</SelectItem>
                            <SelectItem className="shadcn-select-item hover:bg-gray-300" value="reject">Reject</SelectItem>
                            <SelectItem className="shadcn-select-item hover:bg-gray-300" value="counteroffer">Counteroffer</SelectItem>
                          </SelectContent>
                        </Select>

                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </React.Fragment>
          ))}
          <CardFooter>
            <div className="text-xs underline">
              3 more
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
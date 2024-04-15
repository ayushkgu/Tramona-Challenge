"use client";

import React from 'react';
import { useEffect, useState } from 'react';
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
    offersCount: 6,
    offersLeft: 3,
    offerDetails: [
      {
        id: 1,
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
    offersCount: 6,
    offersLeft: 4,
    offerDetails: [
      {
        id: 4,
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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-7xl w-full h-full overflow-auto">
        <Card className="border-none">
          <CardHeader>
            <CardTitle className='mb-5'>Offers and Requests</CardTitle>
            <div className="text-lg mt-2 flex justify-start">
 
            {isSmallScreen ? (
              <Badge style={{ color: 'black', border: '1px solid #A0AEC0', marginRight: '0.5rem', fontSize: "0.8rem",fontWeight: 'normal', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>Cities</Badge>
            ) : (
              <span className="text-gray-400 mr-10">Cities (1)</span>
            )}

            {isSmallScreen ? (
              <Badge style={{ backgroundColor: 'black', color: 'white', border: 'none', fontSize: "0.8rem", fontWeight: 'normal', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>Properties</Badge>
            ) : (
              <span className="font-bold text-black mb-2">Properties (1)</span>
            )}

            </div>
            {isSmallScreen ? <hr style={{ borderColor: '#A0AEC0', marginTop: "1rem" }} /> : ""}
          </CardHeader>
          {propertiesWithOffers.map((property, propertyIndex) => (
            <React.Fragment key={propertyIndex}>
              <div className="flex justify-between items-center ml-6">
                <div className="flex items-center">
                  <Image alt={property.propertyName} src={property.propertyImage} width={70} height={70} className="rounded-lg" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{property.propertyName}</h3>
                    <p className="text-sm text-gray-600">{property.location}</p>
                    <Badge style={{ backgroundColor: '#305cf4', color: 'white', border: 'none' }}>{property.offersCount} offers</Badge>
                    
                  </div>
                </div>
                <div className="flex items-center space-x-2">
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
                {isSmallScreen ? (
                // Mobile Table layout
                
                  <div className="flex flex-col space-y-4 mt-6 ">
                    {property.offerDetails.map((offer, index) => (
                      <div key={index} className="bg-white shadow rounded-lg border border-gray-300 p-6">
                        <div className='mb-4'><p className='font-bold'>{offer.pricePerNight} /night</p> <p>{offer.totalPrice} total</p> </div>
                        <div className='mb-4'><p className='font-bold'>{offer.dates}</p> <p>{offer.nights} nights</p> </div>
                        <div className='mb-4'><p className='font-bold'>{offer.guests}</p> <p>{offer.guestDetails} </p> </div>
                        <div className='mb-4'><p className='underline'>{offer.username}</p> </div>
                        <div className={`flex items-center mb-4 font-medium ${offer.expiresSoon ? 'text-red-500' : ''}`}>
                              <Clock4 width={20} height={20} />
                              <span className='ml-2'>Expires in {offer.expiryHours} hours</span>
                            </div>                        <div>
                        <Select className="shadcn-select">
                          <SelectTrigger className="shadcn-select-trigger justify-center w-[100%]">
                            <SelectValue placeholder="Respond" />
                          </SelectTrigger>
                          <SelectContent className="shadcn-select-content">
                            <SelectItem className="shadcn-select-item hover:bg-gray-300" value="accept">Accept</SelectItem>
                            <SelectItem className="shadcn-select-item hover:bg-gray-300" value="reject">Reject</SelectItem>
                            <SelectItem className="shadcn-select-item hover:bg-gray-300" value="counteroffer">Counteroffer</SelectItem>
                          </SelectContent>
                        </Select>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Desktop Table layout
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
                      {property.offerDetails.map((offer, index) => (
                        <TableRow key={index}>
                          <TableCell> <span className='font-bold'>{offer.pricePerNight} /night </span><br/>{offer.totalPrice} total</TableCell>
                          <TableCell><span className='font-bold'>{offer.dates}</span><br/>{offer.nights} nights</TableCell>
                          <TableCell><span className='font-bold'>{offer.guests}</span><br/>{offer.guestDetails}</TableCell>
                          <TableCell><span className='underline'>{offer.username}</span></TableCell>
                          <TableCell>
                            <div className={`flex items-center font-medium ${offer.expiresSoon ? 'text-red-500' : ''}`}>
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
                )}
              {!isSmallScreen ? (<div className="text-sm underline">{property.offersLeft} more</div>) : ""}
              </CardContent>
            </React.Fragment>
          ))}
        </Card>
      </div>
    </div>
  );
}
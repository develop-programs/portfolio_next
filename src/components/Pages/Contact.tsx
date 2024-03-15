"use client";
import React from "react";
import data from "@/lib/data/forms.json";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Contact() {
  const [form, setFormData] = React.useState<Object>({});
  return (
    <div className="w-full h-screen flex items-center">
      <div className="container max-w-8xl flex flex-col-reverse gap-12 lg:gap-2 lg:flex-row">
        <div className="flex-1 space-y-12">
          <div className="text-start space-y-2">
            <span className="text-2xl font-black">{data.contacts.title}</span>
            <div className="w-full lg:w-32 h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
          </div>
          <div className="h-full flex flex-col space-y-4">
            {data.contacts.data.map((item: any, idk: any) => (
              <div key={idk} className="col-span-4 flex gap-4 items-center">
                <Image
                  src={item.icon}
                  alt={item.media_type}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-lg font-bold">{item.media_type} :</span>
                <span className="text-sm font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="text-start space-y-2">
            <span className="text-2xl font-black">{data.form.title}</span>
            <div className="w-32 h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
          </div>
          <form
            action=""
            className="grid grid-flow-row grid-cols-4 gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(form);
            }}
          >
            {data.form.data.map((item: any, idk: any) => (
              <div
                className={`${
                  item.name === "Name"
                    ? "col-span-2"
                    : item.name === "Email"
                    ? "col-span-2"
                    : "col-span-4"
                }`}
                key={idk}
              >
                {item.type === "textarea" ? (
                  <div>
                    <Label htmlFor={item.id}>{item.name}</Label>
                    <Textarea
                      id={item.id}
                      name={item.name}
                      placeholder={item.placeholder}
                      rows={7}
                      onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>
                      ) => {
                        setFormData({
                          ...form,
                          [event.target.name]: event.target.value,
                        });
                      }}
                    />
                  </div>
                ) : item.type === "text" ? (
                  <div>
                    <Label htmlFor={item.id}>{item.name}</Label>
                    <Input
                      type={item.type}
                      id={item.id}
                      name={item.name}
                      placeholder={item.placeholder}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setFormData({
                          ...form,
                          [event.target.name]: event.target.value,
                        });
                      }}
                    />
                  </div>
                ) : (
                  <div>
                    <Label htmlFor={item.id}>{item.name}</Label>
                    <Input
                      type={item.type}
                      id={item.id}
                      name={item.name}
                      placeholder={item.placeholder}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setFormData({
                          ...form,
                          [event.target.name]: event.target.value,
                        });
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
            <Button type="submit" className="col-span-2">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

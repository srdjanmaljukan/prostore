"use client";

import { productDefaultValues } from "@/lib/constants";
import { insertProductSchema, updateProductSchema } from "@/lib/validators";
import { Product } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { toast } from "sonner";
import {z} from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import slugify from "slugify";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const ProductForm = ({type, product, productId}: {type: "Create" | "Update"; product?: Product; productId?: string}) => {

    const router = useRouter();

    const schema = type === "Update" ? updateProductSchema : insertProductSchema;

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: product && type === "Update" ? product : productDefaultValues,
    })

    return ( <Form {...form}>
        <form className="space-y-8">
            <div className="flex flex-col md:flex-row gap-5">
                {/* Name */}
                <FormField
                control={form.control}
                name="name"
                render={({field}: {field: ControllerRenderProps<z.infer<typeof schema>, "name">}) => (
                    <FormItem className="w-full">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter product name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                {/* Slug */}
                <FormField
                control={form.control}
                name="slug"
                render={({field}: {field: ControllerRenderProps<z.infer<typeof schema>, "slug">}) => (
                    <FormItem className="w-full">
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                            <div className="relative flex items-center">
                            <Input placeholder="Enter slug" {...field} />
                            <Button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 ml-2" onClick={() => {
                                form.setValue("slug", slugify(form.getValues("name"), {lower: true}))
                            }}>Generate</Button>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                {/* Category */}
                <FormField
                control={form.control}
                name="category"
                render={({field}: {field: ControllerRenderProps<z.infer<typeof schema>, "category">}) => (
                    <FormItem className="w-full">
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter category" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                {/* Brand */}
                <FormField
                control={form.control}
                name="brand"
                render={({field}: {field: ControllerRenderProps<z.infer<typeof schema>, "brand">}) => (
                    <FormItem className="w-full">
                        <FormLabel>Brand</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter brand" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                {/* Price */}
                <FormField
                control={form.control}
                name="price"
                render={({field}: {field: ControllerRenderProps<z.infer<typeof schema>, "price">}) => (
                    <FormItem className="w-full">
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter product price" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                {/* Stock */}
                <FormField
                control={form.control}
                name="stock"
                render={({field}: {field: ControllerRenderProps<z.infer<typeof schema>, "stock">}) => (
                    <FormItem className="w-full">
                        <FormLabel>Stock</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter stock" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            </div>
            <div className="upload-field flex flex-col md:flex-row gap-5">
                {/* Images */}
            </div>
            <div className="upload-field">
                {/* isFeatured */}
            </div>
            <div>
                {/* Description */}
                <FormField
                control={form.control}
                name="description"
                render={({field}: {field: ControllerRenderProps<z.infer<typeof schema>, "description">}) => (
                    <FormItem className="w-full">
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter product description" className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            </div>
            <div>
                {/* Submit */}
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="button col-span-2 w-full">
                    {form.formState.isSubmitting ? "Submitting" : `${type} Product`}
                </Button>
            </div>
        </form>
    </Form> );
}
 
export default ProductForm;
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from "@nestjs/common";

import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(
    @Body(ValidationPipe) dto: CreateProductDto,
  ) {
    return await this.productService.createProduct(dto);
  }

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get(":id")
  async getProductById(@Param("id") id: string) {
    return await this.productService.getProductById(id);
  }

  @Patch(":id")
  async updateProduct(
    @Param("id") id: string,
    @Body(ValidationPipe) dto: UpdateProductDto,
  ) {
    return await this.productService.updateProduct(id, dto);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return await this.productService.deleteProduct(id);
  }
}
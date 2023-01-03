import { ApiProperty } from '@nestjs/swagger';
import { Currency, TransactionType } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class TransactionDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: 'number',
    required: true,
    minimum: 1,
    default: 1,
  })
  transactionAmount: number;

  @IsString()
  @IsEnum(Currency)
  @ApiProperty({
    type: 'string',
    default: Currency.USD,
    required: true,
  })
  currency: Currency;

  @IsString()
  @IsEnum(TransactionType)
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    default: TransactionType.send,
    required: true,
  })
  transactionType: TransactionType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    required: true,
  })
  sourceWalletId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    required: true,
  })
  destinationWalletId: string;

  @IsString()
  @ApiProperty({
    type: 'string',
  })
  comment?: string;
}

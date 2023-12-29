import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, UserModule, ConfigModule.forRoot()],
  controllers: [],
  // providers: [PrismaService],
})
export class AppModule {}
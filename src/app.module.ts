import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriberModule } from './subscriber/subscriber.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    SubscriberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

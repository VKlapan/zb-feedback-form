import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedbacksController } from './feedbacks.controller';
import { Feedback } from './feedbacks.model';
import { FeedbacksService } from './feedbacks.service';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
  imports: [SequelizeModule.forFeature([Feedback])],
})
export class FeedbacksModule {}

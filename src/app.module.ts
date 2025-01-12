import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { SharedModule } from './_shared/shared.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    SharedModule,
  ],
})
export class AppModule {}

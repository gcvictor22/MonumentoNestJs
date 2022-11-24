import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Monumento Rest Api')
    .setDescription('Esta es la documentación de los endpoints de esta pequeña API')
    .setVersion('Gypsy Version')
    .addTag('Monumentos')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

// src/shared/mappers/mapper.service.ts
import { plainToClass } from 'class-transformer'

export class MapperService {
  static mapPrismaToDomain<T, U>(prismaModel: T, domainModel: new () => U): U {
    // Manejar valores undefined y convertir a null o valores por defecto
    const modelWithDefaults = Object.fromEntries(
      Object.entries(prismaModel).map(([key, value]) => [key, value ?? null]),
    )
    return plainToClass(domainModel, modelWithDefaults)
  }
}

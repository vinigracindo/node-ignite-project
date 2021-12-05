import { Specification } from '../../model/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private constructor() {
    this.specifications = [];
  }

  private static INSTANCE: SpecificationsRepository;
  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    })
    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };

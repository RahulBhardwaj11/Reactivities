using AutoMapper;
using Domain;

namespace Application.core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Activity, Activity>();
        }

    }
}